import { MeshBuilder, Scene } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

/**
 * https://doc.babylonjs.com/divingDeeper/lights/lights_introduction
 */
export class Exercise08 extends ExerciseBase {
    protected addContent() {

        const size = 2;

        const ground = MeshBuilder.CreateGround("ground", { width: size * 3, height: size * 3 }, this.scene);	
        const meshLeft = MeshBuilder.CreateBox("meshLeft", { size: size }, this.scene);
        const meshRight = MeshBuilder.CreateBox("meshRight", { size: size }, this.scene);
        const meshTop = MeshBuilder.CreateBox("meshTop", { size: size }, this.scene);
        const meshBottom = MeshBuilder.CreateBox("meshBottom", { size: size }, this.scene);
        
        meshLeft.position.x = -size;
        meshRight.position.x = size;
        meshTop.position.z = -size;
        meshBottom.position.z = size;

        meshLeft.position.y = size * 0.5;
        meshRight.position.y = size * 0.5;
        meshTop.position.y = size * 0.5;
        meshBottom.position.y = size * 0.5;

        // TODO: implmenet logic here
    }

    protected createLight(scene: Scene): void {
        // leave blank for exercise to test lights
    }
}