import { Scene } from "@babylonjs/core";
import { PowerUp } from "../components/powerUp";
import { Player } from "../components/player";

export class PowerUpPickup {
    public constructor(scene: Scene, private powerUp: PowerUp, private player: Player) {
        scene.registerAfterRender(this.onFrame);
    }

    private onFrame = () => {
        if (this.powerUp.intesectWith(this.player.colliderMesh)) {
            this.powerUp.setVisible(false);
            this.player.increaseSpeed();
        }
    }
}