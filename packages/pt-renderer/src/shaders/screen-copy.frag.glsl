precision highp float;
precision highp int;
precision highp sampler2D;

out highp vec4 pc_fragColor;

uniform sampler2D tPathTracedImageTexture;

void main()
{
	pc_fragColor = texelFetch(tPathTracedImageTexture, ivec2(gl_FragCoord.xy), 0);
}
