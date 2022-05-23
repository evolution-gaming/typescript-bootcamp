precision highp float;

uniform float time;
varying vec2 vUV;

void main(void) {
    vec3 color = vec3(vUV.x * abs(sin(time)), vUV.y * abs(cos(time)), vUV.x * vUV.y) * 2.0 * (abs(sin(time)) + 1.0);
    gl_FragColor = vec4(color, 1.0);
}


SKIPOJAM DECAL DALU? - varam tik paradit moš kā izskatās un pastastit?
