import { KeyboardEventTypes, Scene } from "@babylonjs/core";

export class PlayerInput {
    public moveForward: boolean = false;
    public moveBackward: boolean = false;
    public moveLeft: boolean = false;
    public moveRight: boolean = false;
    private drawDecalSubscribers: (() => void)[] = [];
    private isDecalPressed = false;

    public constructor(scene: Scene) {
        this.registerKeyboardEvents(scene);
    }

    public onDrawDecal(callback: () => void) {
        this.drawDecalSubscribers.push(callback);
    }

    private registerKeyboardEvents(scene: Scene) {
        scene.onKeyboardObservable.add((info) => {
            switch(info.event.code) {
                case "KeyW":
                  this.moveForward = info.type === KeyboardEventTypes.KEYDOWN;
                  break;
                case "KeyS":
                  this.moveBackward = info.type === KeyboardEventTypes.KEYDOWN;
                  break;
                case "KeyA":
                  this.moveLeft = info.type === KeyboardEventTypes.KEYDOWN;
                  break;
                case "KeyD":
                  this.moveRight = info.type === KeyboardEventTypes.KEYDOWN;
                  break;
                case "KeyT":
                  if (!this.isDecalPressed && info.type === KeyboardEventTypes.KEYDOWN) {
                    this.isDecalPressed = true;
                  }

                  if (this.isDecalPressed && info.type === KeyboardEventTypes.KEYUP) {
                    this.isDecalPressed = false;
                    this.drawDecalSubscribers.forEach(cb => cb());
                  }
                  break;
            }
          });
    }
}