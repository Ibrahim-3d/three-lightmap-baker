precision highp float;
precision highp int;

out vec2 vUv;

void main() {
  // Compute UV from position (PlaneGeometry spans [-1,1], map to [0,1])
  // Avoids depending on Three.js injecting the 'uv' attribute
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position, 1.0);
}
