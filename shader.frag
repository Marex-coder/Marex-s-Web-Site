#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

    mat2 R2d(float r){return mat2(cos(r),-sin(r),sin(r),cos(r));}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 R2d = uv*R2d(u_time/4.);
    float pattern = ceil(sin(R2d.x*50.));
    gl_FragColor = vec4(pattern);
}
