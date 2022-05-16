import { MeshBuilder } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

export class Exercise02 extends ExerciseBase {
    protected addContent() {
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this.scene);
        const box = MeshBuilder.CreateBox("box", { size: 1 }, this.scene);
        const cylinder = MeshBuilder.CreateCylinder("cylinder", { height: 1, diameter: 1 }, this.scene);
        box.position.x += 2;

        cylinder.position.x -= 2;
        cylinder.scaling.setAll(2);
    }
}