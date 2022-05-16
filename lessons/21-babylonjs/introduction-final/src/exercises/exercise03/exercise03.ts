import { Color3, MeshBuilder, StandardMaterial } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

export class Exercise03 extends ExerciseBase {
    protected addContent() {
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this.scene);
        const material = new StandardMaterial("material", this.scene);
        material.diffuseColor = new Color3(1, 0, 1);
        sphere.material = material;
    }
}