import { FreeCamera, Mesh, Scene, Vector3, AnimationRange, Skeleton, AnimationPropertiesOverride } from "@babylonjs/core";
import { getSize } from "../common/utils";
import { PlayerInput } from "../utils/playerInput";

enum PlayerAnimation {
    Idle = "YBot_Idle",
    Walk = "YBot_Walk",
    Run = "YBot_Run",
}

export class Player extends Mesh {
    private skin: Mesh;
    private input: PlayerInput;
    private moveSpeed = 0.03;
    private currentAnimation: PlayerAnimation = PlayerAnimation.Idle;
    private animationSkeleton: Skeleton;
    private camera: FreeCamera;

    public constructor(scene: Scene, skinName: string) {
        super("player", scene);
        this.camera = new FreeCamera("camera", Vector3.Zero(), scene);
        this.skin = scene.getMeshByName(skinName) as Mesh;
        this.animationSkeleton = (this.skin.getChildren()[0] as Mesh).skeleton;
        
        this.skin.setParent(this);
        this.skin.position.set(0, 0, 0);
        this.input = new PlayerInput(scene);
        this.rotation.y = Math.PI;

        this.playAnimation(this.currentAnimation);
        this.animationSkeleton.animationPropertiesOverride = new AnimationPropertiesOverride();
        this.animationSkeleton.animationPropertiesOverride.enableBlending = true;
        this.animationSkeleton.animationPropertiesOverride.blendingSpeed = 0.1;

        this.setupCamera();
        scene.onBeforeRenderObservable.add(this.onFrame);
    }

    private onFrame = () => {
        this.onMove();
    }

    private onMove() { 
        if (this.input.moveLeft) {
            this.rotation.y -= this.moveSpeed * this.getScene().getAnimationRatio();
        } else if (this.input.moveRight) {
            this.rotation.y += this.moveSpeed * this.getScene().getAnimationRatio();
        }    

        if (this.input.moveForward || this.input.moveBackward) {
            const moveVector = new Vector3(Math.sin(this.rotation.y) * this.moveSpeed, 0, Math.cos(this.rotation.y) * this.moveSpeed);
            if (this.input.moveBackward) {
                moveVector.negateInPlace();
            } 
            this.moveWithCollisions(moveVector);
            if (this.currentAnimation !== PlayerAnimation.Walk) {
                this.currentAnimation = PlayerAnimation.Walk
                this.playAnimation(this.currentAnimation);
            }
        } else if (this.currentAnimation !== PlayerAnimation.Idle) {
            this.currentAnimation = PlayerAnimation.Idle
            this.playAnimation(this.currentAnimation);
        }
    }
    
    private setupCamera() {
        this.camera.parent = this;
        this.camera.position.set(0, getSize(this).y + 1.5, -2);
        this.camera.setTarget(new Vector3(0, getSize(this).y, 0));
        this.camera.getScene().activeCamera = this.camera;
    }

    private playAnimation(animation: PlayerAnimation) {
        const animationRange = this.getAnimationRangeByName(animation);
        this.getScene().beginAnimation(this.animationSkeleton, animationRange.from, animationRange.to, true);
    }

    private getAnimationRangeByName(animation: PlayerAnimation): AnimationRange {
        return this.animationSkeleton.getAnimationRange(animation);
    }
}