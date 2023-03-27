import "@babylonjs/loaders/glTF";
import { AssetsManager } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

/**
 * BoomBox https://www.babylonjs-playground.com/scenes/BoomBox.glb
 */
export class Exercise10 extends ExerciseBase {
    protected addContent() {
        const assetManager = new AssetsManager(this.scene);
        assetManager.useDefaultLoadingScreen = false;
        assetManager.addMeshTask(
            "load-boom-box", 
            "", 
            "https://www.babylonjs-playground.com/scenes/BoomBox.glb", 
            ""
        );
        assetManager    
            .loadAsync()    
            .then(() => { 
                // Too small to see
                this.scene.getMeshByName("BoomBox").scaling.set(100, 100, 100);
            })    
            .catch((e) => { 
                console.log("error", e);
                // error on loading 
            });

    }
}