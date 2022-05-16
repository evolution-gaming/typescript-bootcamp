import { Color3, MeshBuilder, StandardMaterial, Texture, Animation, Vector3 } from "@babylonjs/core";
import { ExerciseBase } from "../../common/ExerciseBase";

export class Exercise07 extends ExerciseBase {
    protected addContent() {
        const mesh = MeshBuilder.CreateBox("mesh1", { size: 2 }, this.scene);
        mesh.material = new StandardMaterial("material", this.scene);
        mesh.material.animations = [];

        this.scene.registerBeforeRender(() => {    
            mesh.rotation.x += 0.01 * this.scene.getAnimationRatio();
            mesh.rotation.y += 0.01 * this.scene.getAnimationRatio();
            mesh.rotation.z += 0.01 * this.scene.getAnimationRatio();
       });
        
        const startFrame = 0;
        const endFrame = 120;

        const positionAnimation = new Animation("anim-position", "position.x", 60, Animation.ANIMATIONTYPE_FLOAT);
        const positionAnimationKeyframes = [   
            { frame: startFrame, value: 2, },
            { frame: endFrame / 2, value: -2, },
            { frame: endFrame, value: 2, },
        ];
        positionAnimation.setKeys(positionAnimationKeyframes);

        const scaleAnimation = new Animation("anim-scale", "scaling", 60, Animation.ANIMATIONTYPE_VECTOR3);
        const scaleAnimationKeyframes = [   
            { frame: startFrame, value: new Vector3(1, 1, 1), },
            { frame: endFrame / 2, value: new Vector3(1.5, 1.5, 1.5), },
            { frame: endFrame, value: new Vector3(1, 1, 1), },
        ];
        scaleAnimation.setKeys(scaleAnimationKeyframes);

        const colorAnimation = new Animation("anim-color", "diffuseColor", 60, Animation.ANIMATIONTYPE_COLOR3);
        const colorAnimationKeyframes = [   
            { frame: startFrame, value: new Color3(1, 0, 0), },
            { frame: endFrame, value: new Color3(0, 0, 1), },
            { frame: endFrame * 2, value: new Color3(1, 0, 0), },
        ];
        colorAnimation.setKeys(colorAnimationKeyframes);

        mesh.animations.push(positionAnimation);
        mesh.animations.push(scaleAnimation);
        mesh.material.animations.push(colorAnimation);

        this.scene.beginAnimation(mesh, startFrame, endFrame, true);
        this.scene.beginAnimation(mesh.material, startFrame, endFrame * 2, true);
    }
}