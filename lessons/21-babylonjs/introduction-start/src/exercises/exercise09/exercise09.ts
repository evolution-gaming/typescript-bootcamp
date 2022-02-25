import { MeshBuilder, Scene, FreeCamera, Vector3, ArcRotateCamera } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

/**
 * https://doc.babylonjs.com/divingDeeper/cameras/camera_introduction
 */
export class Exercise09 extends ExerciseBase {
    protected addContent() {
        const size = 2;
        const ground = MeshBuilder.CreateGround("ground", { width: size * 3, height: size * 3 }, this.scene);	
        const mesh = MeshBuilder.CreateBox("mesh", { size: size }, this.scene);
        mesh.position.y += size * 0.5;
        // TODO: implmenet logic here
    }

    protected createCamera(scene: Scene): void {
        // removed for exercise
    }
}