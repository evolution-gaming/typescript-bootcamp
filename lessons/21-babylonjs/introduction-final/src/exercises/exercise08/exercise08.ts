import { Color3, MeshBuilder, StandardMaterial, Texture, Animation, Vector3, PointLight, DirectionalLight, SpotLight, HemisphericLight, Scene } from "@babylonjs/core";
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

        const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), this.scene);
        hemisphericLight.diffuse = new Color3(0, 1, 0);
	    hemisphericLight.specular = new Color3(0, 0, 1);
        hemisphericLight.intensity = 0;


        const pointLight = new PointLight("pointLight", new Vector3(0, size * 0.5, 0), this.scene);
        pointLight.diffuse = new Color3(0, 1, 0);
	    pointLight.specular = new Color3(0, 0, 1);
        pointLight.position.set(0, size * 0.5, 0);
        pointLight.intensity = 0;


        const directionalLight = new DirectionalLight("directionalLight", new Vector3(0, -1, 0), this.scene);
        directionalLight.diffuse = new Color3(0, 1, 0);
	    directionalLight.specular = new Color3(0, 0, 1);
        directionalLight.direction.set(0, -1, 0);
        directionalLight.intensity = 0;

        const spotLight = new SpotLight("spotLight", new Vector3(1, 1, 1), new Vector3(0, -1, 0), Math.PI * 0.5, 25, this.scene);
	    spotLight.diffuse = new Color3(0, 1, 0);
	    spotLight.specular = new Color3(0, 0, 1);
        spotLight.intensity = 0;
    }

    protected createLight(scene: Scene): void {
        // leave blank for exercise to test lights
    }
}