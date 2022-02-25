import { Color3, MeshBuilder, StandardMaterial, Texture } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

/**
 *  url: https://www.babylonjs-playground.com/textures/bloc.jpg
 */
export class Exercise05 extends ExerciseBase {
    protected addContent() {
        const mesh = MeshBuilder.CreateBox("mesh", { size: 2 }, this.scene);
        const material = new StandardMaterial("material", this.scene);
        mesh.material = material;
        // TODO: implmenet logic here
    }
}