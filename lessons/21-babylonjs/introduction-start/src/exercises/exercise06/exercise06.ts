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
         // TODO: implmenet logic here
    }
}