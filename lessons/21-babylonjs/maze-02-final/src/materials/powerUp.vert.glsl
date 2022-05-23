attribute vec3 position;
attribute vec2 uv;

uniform mat4 worldViewProjection;
uniform float time;
uniform float rotationSpeed;

varying vec2 vUV;

vec2 rotateVector2(vec2 v, float angle){
    return vec2(
    cos(angle) * v.x + sin(angle) * v.y,
    cos(angle) * v.y - sin(angle) * v.x
    );
}

void main() {
    vUV = uv;
    float rotationAngle = time * rotationSpeed;
    vec3 pos = position;
    pos.xz = rotateVector2(pos.xz, rotationAngle);
    gl_Position = worldViewProjection * vec4(pos, 1.0);
}
