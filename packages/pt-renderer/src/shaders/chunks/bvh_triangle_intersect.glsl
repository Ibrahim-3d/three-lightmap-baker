//-------------------------------------------------------------------------------------------------------------------
float BVH_TriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, out float u, out float v )
//-------------------------------------------------------------------------------------------------------------------
{	// Möller–Trumbore triangle intersection — DOUBLE-SIDED
	// Erichlof's original rejects det < 0 (back-face culling). We remove that
	// check because Three.js BoxGeometry / merged geometry may have mixed
	// winding after clone + applyMatrix4 + toNonIndexed + mergeGeometries.
	// The math works correctly for both positive and negative determinants:
	// when det < 0 the sign flips of u, v, and t cancel out.
	vec3 edge1 = v1 - v0;
	vec3 edge2 = v2 - v0;
	vec3 pvec  = cross(rayDirection, edge2);
	float det  = 1.0 / dot(edge1, pvec);
	vec3 tvec  = rayOrigin - v0;
	u = dot(tvec, pvec) * det;
	vec3 qvec  = cross(tvec, edge1);
	v = dot(rayDirection, qvec) * det;
	float t    = dot(edge2, qvec) * det;
	return (t <= 0.0 || u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0) ? INFINITY : t;
}
