import { Color3, MeshBuilder, StandardMaterial, Texture } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

/**
 *  Diffuse texture: https://www.babylonjs-playground.com/textures/bloc.jpg
 *  Emissive texture: https://www.babylonjs-playground.com/textures/bloc.jpg
 *  Specular texture: https://www.babylonjs-playground.com/textures/reflectivity.png
 *  Opacity texture: https://www.babylonjs-playground.com/textures/palm.png
 */
export class Exercise06 extends ExerciseBase {
    protected addContent() {
        const mesh = MeshBuilder.CreateBox("mesh", { size: 2 }, this.scene);
        const material = new StandardMaterial("material", this.scene);
        mesh.material = material;
        
        material.diffuseColor = new Color3(1, 0, 0);
        // color texture
        material.diffuseTexture = new Texture("https://www.babylonjs-playground.com/textures/bloc.jpg", this.scene);

        material.emissiveColor = new Color3(1, 0, 0);
        // light texture
        material.emissiveTexture = new Texture("https://www.babylonjs-playground.com/textures/bloc.jpg", this.scene);

        material.specularColor = new Color3(1, 1, 1);
        material.specularPower = 5;

        // reflectivity texture
        material.specularTexture = new Texture("https://www.babylonjs-playground.com/textures/reflectivity.png", this.scene);

        // mask
        material.opacityTexture = new Texture("https://www.babylonjs-playground.com/textures/palm.png", this.scene);
        
        material.alpha = 0.5;
    }
}