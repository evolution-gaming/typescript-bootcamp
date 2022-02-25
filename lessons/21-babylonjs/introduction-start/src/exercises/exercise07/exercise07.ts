import { Color3, MeshBuilder, StandardMaterial, Texture, Animation, Vector3 } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

export class Exercise07 extends ExerciseBase {
    protected addContent() {
        const mesh = MeshBuilder.CreateBox("mesh1", { size: 2 }, this.scene);
        mesh.material = new StandardMaterial("material", this.scene);
        mesh.material.animations = [];
        // TODO: implmenet logic here
    }
}