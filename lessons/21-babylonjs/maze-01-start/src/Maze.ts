import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import { GameBase } from "./common/GameBase";

export class Maze extends GameBase {
    protected addContent(): void {
        this.boot()
            .then(() => {
                // TODO: Fill
            })
    }

    private boot(): Promise<void> {
        // TODO: Fill
        return Promise.resolve();
    }
}