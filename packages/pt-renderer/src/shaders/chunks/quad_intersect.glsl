
float TriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, int isDoubleSided )
{
	vec3 edge1 = v1 - v0;
	vec3 edge2 = v2 - v0;
	vec3 pvec = cross(rayDirection, edge2);
	float det = 1.0 / dot(edge1, pvec);
	if ( isDoubleSided == FALSE && det < 0.0 ) 
		return INFINITY;
	vec3 tvec = rayOrigin - v0;
	float u = dot(tvec, pvec) * det;
	vec3 qvec = cross(tvec, edge1);
	float v = dot(rayDirection, qvec) * det;
	float t = dot(edge2, qvec) * det;
	return (t <= 0.0 || u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0) ? INFINITY : t;
}
//--------------------------------------------------------------------------------------------------------------
float QuadIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 v3, vec3 rayOrigin, vec3 rayDirection, int isDoubleSided )
//--------------------------------------------------------------------------------------------------------------
{
	return min(TriangleIntersect(v0, v1, v2, rayOrigin, rayDirection, isDoubleSided), 
		   TriangleIntersect(v0, v2, v3, rayOrigin, rayDirection, isDoubleSided));
}
