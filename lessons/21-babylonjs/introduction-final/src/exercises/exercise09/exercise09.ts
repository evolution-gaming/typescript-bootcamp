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

        const freeCamera = new FreeCamera("freeCamera", new Vector3(0, 5, -15), this.scene);
        freeCamera.setTarget(new Vector3(0, 0, 0));
        freeCamera.attachControl();

        const arcRotateCamera = new ArcRotateCamera("arcCamera", -Math.PI  * 0.5, Math.PI * 0.25, 12, Vector3.Zero(), this.scene);
        arcRotateCamera.attachControl();

        this.scene.switchActiveCamera(arcRotateCamera);
    }

    protected createCamera(scene: Scene): void {
        // removed for exercise
    }
}