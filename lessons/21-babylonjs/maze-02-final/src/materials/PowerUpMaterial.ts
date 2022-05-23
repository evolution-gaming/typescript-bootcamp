import { ShaderMaterial, Effect, Scene } from "@babylonjs/core";


import powerUpMaterialFrag from "./powerUp.frag.glsl";
import powerUpMaterialVertex from "./powerUp.vert.glsl";

const PowerUpMaterialShaderName = "PowerUpMaterial";
Effect.ShadersStore[`${PowerUpMaterialShaderName}VertexShader`] = powerUpMaterialVertex;
Effect.ShadersStore[`${PowerUpMaterialShaderName}FragmentShader`] = powerUpMaterialFrag;


export class PowerUpMaterial extends ShaderMaterial {
    private time = 0;
    public constructor(private scene: Scene) {
        super(
            "power-up-material",
            scene,
            {
                vertex: PowerUpMaterialShaderName,
                fragment: PowerUpMaterialShaderName,
            },
            {
                attributes: ["position", "uv"],
                uniforms: [
                    "worldViewProjection",
                    "time",
                    "rotationSpeed"
                ],
                needAlphaBlending: true,
            },
        );
        this.setFloat("time", this.time);
        this.setFloat("rotationSpeed", 1);
        scene.registerAfterRender(this.onFrame);
    }
    private onFrame = () => {
        this.time += 0.01 * this.scene.getAnimationRatio();
        this.setFloat("time", this.time);
    };
}
