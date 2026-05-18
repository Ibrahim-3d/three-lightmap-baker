
float calcFresnelReflectance(vec3 rayDirection, vec3 n, float etaI, float etaT, out float IoR_ratio)
{
	float cosThetaI = clamp(dot(-rayDirection, n), -1.0, 1.0);
	float temp = etaI;
	if (cosThetaI < 0.0)
	{	
		etaI = etaT;
		etaT = temp;
	}
	IoR_ratio = etaI / etaT;
	cosThetaI = abs(cosThetaI);
	float sin2ThetaT = (IoR_ratio * IoR_ratio) * (1.0 - (cosThetaI * cosThetaI));
	if (sin2ThetaT >= 1.0) // handle total internal reflection
		return 1.0; 
	float cosThetaT = sqrt(1.0 - sin2ThetaT);

	float Rparl = ((etaT * cosThetaI) - (etaI * cosThetaT)) / ((etaT * cosThetaI) + (etaI * cosThetaT));
    	float Rperp = ((etaI * cosThetaI) - (etaT * cosThetaT)) / ((etaI * cosThetaI) + (etaT * cosThetaT));
    	return clamp(0.5 * ((Rparl * Rparl) + (Rperp * Rperp)), 0.0, 1.0);
}
