import { MeshBuilder } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

export class Exercise03 extends ExerciseBase {
    protected addContent() {
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this.scene);
        // TODO: implmenet logic here
    }
}