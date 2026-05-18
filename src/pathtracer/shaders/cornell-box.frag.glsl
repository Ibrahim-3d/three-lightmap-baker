precision highp float;
precision highp int;
precision highp sampler2D;

// ── Dynamic object uniforms — PTController updates these each frame ──────────
// Boxes: inverse world matrix (local-space BVH + transform in shader = zero rebuild)
uniform mat4  uTallBoxInvMatrix;
uniform mat4  uShortBoxInvMatrix;
// Sphere: direct world-space position (analytic intersection, no matrix needed)
uniform vec3  uSpherePosition;
uniform float uSphereRadius;

#include <pathtracing_uniforms_and_defines>

// ── Scene geometry counts ────────────────────────────────────────────────────
// 6 quads:  [0] area light | [1] floor | [2] ceiling | [3] back | [4] left | [5] right
// 2 boxes:  [0] tall block | [1] short block  (oriented via inv matrix uniforms)
#define N_QUADS 6
#define N_BOXES 2

vec3  rayOrigin, rayDirection;
vec3  hitNormal, hitEmission, hitColor;
vec2  hitUV;
float hitObjectID;
int   hitType = -100;

struct Quad { vec3 normal; vec3 v0; vec3 v1; vec3 v2; vec3 v3;
              vec3 emission; vec3 color; int type; };
struct Box  { vec3 minCorner; vec3 maxCorner;
              vec3 emission; vec3 color; int type; };

Quad quads[N_QUADS];
Box  boxes[N_BOXES];

#include <pathtracing_random_functions>
#include <pathtracing_sphere_intersect>
#include <pathtracing_quad_intersect>
#include <pathtracing_box_intersect>
#include <pathtracing_sample_quad_light>

// ─────────────────────────────────────────────────────────────────────────────
float SceneIntersect()
// ─────────────────────────────────────────────────────────────────────────────
{
	vec3 rObjOrigin, rObjDirection, normal, n;
	float d;
	float t         = INFINITY;
	int   isExiting = FALSE;
	int   objCount  = 0;

	hitObjectID = -INFINITY;

	// ── 6 wall quads (static, world-space) ────────────────────────────────────
	for (int i = 0; i < N_QUADS; i++) {
		d = QuadIntersect(quads[i].v0, quads[i].v1, quads[i].v2, quads[i].v3,
		                  rayOrigin, rayDirection, FALSE);
		if (d < t) {
			t           = d;
			hitNormal   = quads[i].normal;
			hitEmission = quads[i].emission;
			hitColor    = quads[i].color;
			hitType     = quads[i].type;
			hitObjectID = float(objCount);
		}
		objCount++;
	}

	// ── Tall block (mirror box, movable via uTallBoxInvMatrix) ────────────────
	rObjOrigin    = vec3(uTallBoxInvMatrix * vec4(rayOrigin,    1.0));
	rObjDirection = vec3(uTallBoxInvMatrix * vec4(rayDirection, 0.0));
	d = BoxIntersect(boxes[0].minCorner, boxes[0].maxCorner,
	                 rObjOrigin, rObjDirection, normal, isExiting);
	if (d < t) {
		t           = d;
		hitNormal   = transpose(mat3(uTallBoxInvMatrix)) * normal;
		hitEmission = boxes[0].emission;
		hitColor    = boxes[0].color;
		hitType     = boxes[0].type;
		hitObjectID = float(objCount);
	}
	objCount++;

	// ── Short block (diffuse, movable via uShortBoxInvMatrix) ─────────────────
	rObjOrigin    = vec3(uShortBoxInvMatrix * vec4(rayOrigin,    1.0));
	rObjDirection = vec3(uShortBoxInvMatrix * vec4(rayDirection, 0.0));
	d = BoxIntersect(boxes[1].minCorner, boxes[1].maxCorner,
	                 rObjOrigin, rObjDirection, normal, isExiting);
	if (d < t) {
		t           = d;
		hitNormal   = transpose(mat3(uShortBoxInvMatrix)) * normal;
		hitEmission = boxes[1].emission;
		hitColor    = boxes[1].color;
		hitType     = boxes[1].type;
		hitObjectID = float(objCount);
	}
	objCount++;

	// ── Dynamic sphere (movable — update uSpherePosition each frame) ──────────
	d = SphereIntersect(uSphereRadius, uSpherePosition, rayOrigin, rayDirection);
	if (d < t) {
		t           = d;
		hitNormal   = (rayOrigin + rayDirection * t) - uSpherePosition;
		hitEmission = vec3(0);
		hitColor    = vec3(0.95, 0.85, 0.20); // gold diffuse
		hitType     = DIFF;
		hitObjectID = float(objCount);
	}

	return t;
}

// ─────────────────────────────────────────────────────────────────────────────
vec3 CalculateRadiance(out vec3 objectNormal, out vec3 objectColor,
                       out float objectID,    out float pixelSharpness)
// ─────────────────────────────────────────────────────────────────────────────
{
	Quad light = quads[0]; // area light

	vec3  accumCol  = vec3(0);
	vec3  mask      = vec3(1);
	vec3  n, nl, x;
	vec3  dBounceMask, dBounceOrigin, dBounceDir;
	float t, weight;
	int diffCount        = 0;
	int bounceIsSpecular = TRUE;
	int sampleLight      = FALSE;
	int willNeedDiffuse  = FALSE;
	int isDiffuseTime    = FALSE;
	hitType = -100;

	for (int bounces = 0; bounces < 8; bounces++) {
		int prevType = hitType;
		t = SceneIntersect();

		if (t == INFINITY) {
			if (bounces == 0 || (bounces == 1 && prevType == SPEC))
				pixelSharpness = 1.0;
			if (willNeedDiffuse == TRUE) {
				mask = dBounceMask; rayOrigin = dBounceOrigin; rayDirection = dBounceDir;
				willNeedDiffuse = FALSE; bounceIsSpecular = FALSE;
				sampleLight = FALSE; isDiffuseTime = TRUE; diffCount = 1; continue;
			}
			break;
		}

		n  = normalize(hitNormal);
		nl = dot(n, rayDirection) < 0.0 ? n : -n;
		x  = rayOrigin + rayDirection * t;

		if (bounces == 0) objectID = hitObjectID;
		if (diffCount == 0) { objectNormal += n; objectColor += hitColor; }

		if (hitType == LIGHT) {
			if (diffCount == 0) pixelSharpness = 1.0;
			if (bounceIsSpecular == TRUE || sampleLight == TRUE)
				accumCol = mask * hitEmission;
			if (willNeedDiffuse == TRUE) {
				mask = dBounceMask; rayOrigin = dBounceOrigin; rayDirection = dBounceDir;
				willNeedDiffuse = FALSE; bounceIsSpecular = FALSE;
				sampleLight = FALSE; isDiffuseTime = TRUE; diffCount = 1; continue;
			}
			break;
		}

		if (sampleLight == TRUE) {
			if (willNeedDiffuse == TRUE) {
				mask = dBounceMask; rayOrigin = dBounceOrigin; rayDirection = dBounceDir;
				willNeedDiffuse = FALSE; bounceIsSpecular = FALSE;
				sampleLight = FALSE; isDiffuseTime = TRUE; diffCount = 1; continue;
			}
			break;
		}

		if (hitType == DIFF) {
			diffCount++;
			mask *= hitColor;
			bounceIsSpecular = FALSE;
			rayOrigin = x + nl * uEPS_intersect;

			if (diffCount == 1) {
				dBounceMask  = mask * 0.8;
				dBounceOrigin = rayOrigin;
				dBounceDir   = randomCosWeightedDirectionInHemisphere(nl);
				willNeedDiffuse = TRUE;
			}

			// Next-event estimation toward area light
			rayDirection = sampleQuadLight(x, nl, light, weight);
			mask *= weight * 1.5;
			sampleLight = TRUE;
			continue;
		}

		if (hitType == SPEC) {
			mask        *= hitColor;
			rayDirection = reflect(rayDirection, nl);
			rayOrigin    = x + nl * uEPS_intersect;
			continue;
		}
	}

	return max(vec3(0), accumCol);
}

// ─────────────────────────────────────────────────────────────────────────────
// SetupScene — matches SceneController's 10-unit Cornell Box.
//   ROOM = 10, camera at (0,5,18) looking at (0,5,0).
//   X: [-5,+5]  Y: [0,10]  Z: [-5,+5]  (open front face at Z=+5 toward camera)
//
//   Boxes in LOCAL space; transforms come from uTallBox/uShortBoxInvMatrix uniforms.
//   Tall block:  BoxGeometry(3,6,3) → local half-extents (1.5, 3, 1.5)
//   Short block: BoxGeometry(3,3,3) → local half-extents (1.5,1.5,1.5)
// ─────────────────────────────────────────────────────────────────────────────
void SetupScene()
{
	vec3 z  = vec3(0);
	vec3 L1 = vec3(1.0, 0.85, 0.6) * 3.0; // warm ceiling light (tuned for 10-unit room)

	// quads[0] — area light: 2.5×2.5 just below ceiling (Y=9.98)
	quads[0] = Quad(vec3(0,-1,0),
		vec3(-1.25, 9.98,-1.25), vec3( 1.25, 9.98,-1.25),
		vec3( 1.25, 9.98, 1.25), vec3(-1.25, 9.98, 1.25),
		L1, z, LIGHT);

	// quads[1] — floor Y=0
	quads[1] = Quad(vec3(0,1,0),
		vec3(-5,0, 5), vec3( 5,0, 5),
		vec3( 5,0,-5), vec3(-5,0,-5),
		z, vec3(0.93), DIFF);

	// quads[2] — ceiling Y=10
	quads[2] = Quad(vec3(0,-1,0),
		vec3(-5,10,-5), vec3( 5,10,-5),
		vec3( 5,10, 5), vec3(-5,10, 5),
		z, vec3(0.93), DIFF);

	// quads[3] — back wall Z=-5
	quads[3] = Quad(vec3(0,0,1),
		vec3(-5, 0,-5), vec3( 5, 0,-5),
		vec3( 5,10,-5), vec3(-5,10,-5),
		z, vec3(0.93), DIFF);

	// quads[4] — left wall X=-5 (red)
	quads[4] = Quad(vec3(1,0,0),
		vec3(-5, 0, 5), vec3(-5, 0,-5),
		vec3(-5,10,-5), vec3(-5,10, 5),
		z, vec3(0.70, 0.12, 0.05), DIFF);

	// quads[5] — right wall X=+5 (green)
	quads[5] = Quad(vec3(-1,0,0),
		vec3( 5, 0,-5), vec3( 5, 0, 5),
		vec3( 5,10, 5), vec3( 5,10,-5),
		z, vec3(0.20, 0.40, 0.12), DIFF);

	// boxes — local-space bounds only; world transforms via inv-matrix uniforms
	boxes[0] = Box(vec3(-1.5,-3,-1.5), vec3(1.5, 3, 1.5), z, vec3(0.95), SPEC); // tall mirror
	boxes[1] = Box(vec3(-1.5,-1.5,-1.5), vec3(1.5,1.5,1.5), z, vec3(0.93), DIFF); // short diffuse
}

#include <pathtracing_main>
