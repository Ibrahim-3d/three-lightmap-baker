
/* int solveQuadratic(float A, float B, float C, out float t0, out float t1)
{
	float discrim = B * B - 4.0 * A * C;
    
	if (discrim < 0.0)
        	return FALSE;
    
	float rootDiscrim = sqrt(discrim);
	float Q = (B > 0.0) ? -0.5 * (B + rootDiscrim) : -0.5 * (B - rootDiscrim); 
	// float t_0 = Q / A; 
	// float t_1 = C / Q;
	// t0 = min( t_0, t_1 );
	// t1 = max( t_0, t_1 );
	t1 = Q / A; 
	t0 = C / Q;
	
	return TRUE;
} */
// optimized algorithm for solving quadratic equations developed by Dr. Po-Shen Loh -> https://youtu.be/XKBX0r3J-9Y
// Adapted to root finding (ray t0/t1) for all quadric shapes (sphere, ellipsoid, cylinder, cone, etc.) by Erich Loftis
void solveQuadratic(float A, float B, float C, out float t0, out float t1)
{
	float invA = 1.0 / A;
	B *= invA;
	C *= invA;
	float neg_halfB = -B * 0.5;
	float u2 = neg_halfB * neg_halfB - C;
	float u = u2 < 0.0 ? neg_halfB = 0.0 : sqrt(u2);
	t0 = neg_halfB - u;
	t1 = neg_halfB + u;
}

//-----------------------------------------------------------------------------
float SphereIntersect( float rad, vec3 pos, vec3 rayOrigin, vec3 rayDirection )
//-----------------------------------------------------------------------------
{	
	float t0, t1;
	vec3 L = rayOrigin - pos;
	float a = dot( rayDirection, rayDirection );
	float b = 2.0 * dot( rayDirection, L );
	float c = dot( L, L ) - (rad * rad);
	solveQuadratic(a, b, c, t0, t1);
	return t0 > 0.0 ? t0 : t1 > 0.0 ? t1 : INFINITY;
}
