import { Mesh, Scene } from "@babylonjs/core";

enum PlayerAnimation {
    Idle = "YBot_Idle",
    Walk = "YBot_Walk",
    Run = "YBot_Run",
}

export class Player extends Mesh {
    public constructor(scene: Scene, skinName: string) {
        super("player", scene);
        // TODO: Fill
    }
}