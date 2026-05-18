
// globals used in rand() function
float blueNoise;
float randNumber;
// the following rand() is from a 2024 article by the great Jacco Bikker (og behind Brigade Path Tracer)
// https://jacco.ompf2.com/2024/05/15/ray-tracing-with-voxels-in-c-series-part-4/ 
float rand()
{
	// ensure randNumber keeps evolving (even when called multiple times during the same animation Frame),
	// by adding to itself the blueNoise texture lookup (which does not change), and FrameCounter multiplied with Golden Ratio
	randNumber += (blueNoise + (mod(uFrameCounter, 32.0) * 0.61803399));
	return fract(randNumber); // we only want the fractional portion, so [0.0 to 1.0) (but not including 1.0)
}

// from iq https://www.shadertoy.com/view/4tXyWN
// global seed used in rng() function
uvec2 seed;
float rng()
{
	seed += uvec2(1);
    	uvec2 q = 1103515245U * ( (seed >> 1U) ^ (seed.yx) );
    	uint  n = 1103515245U * ( (q.x) ^ (q.y >> 3U) );
	return float(n) * ONE_OVER_MAX_INT;// (1.0 / float(0xffffffffU));
}

vec3 randomSphereDirection()
{
	float phi = rng() * TWO_PI;
    	float theta = (rng() * 2.0) - 1.0; // range: -1 to +1
	float r = sqrt(1.0 - (theta * theta));
	return normalize(vec3(r * cos(phi), r * sin(phi), theta));	
}

//the following alternative skips the creation of tangent and bi-tangent vectors T and B
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float phi = rng() * TWO_PI;
	float theta = (rng() * 2.0) - 1.0;
	float r = sqrt(1.0 - (theta * theta));
    	return normalize(nl + vec3(r * cos(phi), r * sin(phi), theta));
}

vec3 randomDirectionInSpecularLobe(vec3 normal, vec3 reflectionDir, float roughness)
{
	float phi = rng() * TWO_PI;
	float theta = (rng() * 2.0) - 1.0;
	float r = sqrt(1.0 - (theta * theta));
    	vec3 cosDiffuseDir = normalize(reflectionDir + vec3(r * cos(phi), r * sin(phi), theta));
	vec3 sampleDirection = normalize( mix(reflectionDir, cosDiffuseDir, roughness * roughness) );
	return dot(sampleDirection, normal) > 0.0 ? sampleDirection : reflect(sampleDirection, reflectionDir);
}

/* vec3 randomDirectionInPhongSpecular(vec3 reflectionDir, float shininess)
{
	float cosTheta = pow(rng(), 1.0 / (2.0 + shininess));
	float sinTheta = sqrt(1.0 - cosTheta * cosTheta);
	float phi = rng() * TWO_PI;
	float x = sinTheta * cos(phi);
	float y = sinTheta * sin(phi);
	vec3 T = normalize(cross(reflectionDir.yzx, reflectionDir));
	vec3 B = cross(reflectionDir, T);
	return normalize(T * x + B * y + reflectionDir * cosTheta);
} */

/* 
// this is my crude attempt at a Fibonacci-spiral sample point pattern on a hemisphere above a diffuse surface
#define N_POINTS 64.0 //64.0
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float i = N_POINTS * rng();
			// the Golden angle in radians
	float phi = mod(i * 2.39996322972865332, TWO_PI);
	float r = sqrt(i / N_POINTS); // sqrt pushes points outward to prevent clumping in center of disk
	float x = r * cos(phi);
	float y = r * sin(phi);
	float z = sqrt(1.0 - r * r);
	
	vec3 U = normalize( cross( abs(nl.y) < 0.9 ? vec3(0, 1, 0) : vec3(0, 0, 1), nl ) );
	vec3 V = cross(nl, U);
	return normalize(x * U + y * V + z * nl);
} */

/* 
// like the function several functions above, 
// the following alternative skips the creation of tangent and bi-tangent vectors T and B 
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float phi = rng() * TWO_PI;
	float theta = rng() * 2.0 - 1.0;
	return normalize(nl + vec3(sqrt(1.0 - theta * theta) * vec2(cos(phi), sin(phi)), theta));
} */

