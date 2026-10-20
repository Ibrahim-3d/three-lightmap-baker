
//--------------------------------------------------------------------------------------------------------------
float BoxInteriorIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 rayDirection, out vec3 normal )
//--------------------------------------------------------------------------------------------------------------
{
	vec3 invDir = 1.0 / rayDirection;
	vec3 near = (minCorner - rayOrigin) * invDir;
	vec3 far  = (maxCorner - rayOrigin) * invDir;
	
	vec3 tmin = min(near, far);
	vec3 tmax = max(near, far);
	
	float t0 = max( max(tmin.x, tmin.y), tmin.z);
	float t1 = min( min(tmax.x, tmax.y), tmax.z);
	
	if (t0 > t1) return INFINITY;

	/*
	if (t0 > 0.0) // if we are outside the box
	{
		normal = -sign(rayDirection) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);
		return t0;	
	}
	*/

	if (t1 > 0.0) // if we are inside the box
	{
		normal = -sign(rayDirection) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);
		return t1;
	}

	return INFINITY;
}
