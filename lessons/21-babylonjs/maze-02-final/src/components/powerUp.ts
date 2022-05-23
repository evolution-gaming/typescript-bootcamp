import { TransformNode, Mesh, MeshBuilder } from "@babylonjs/core";
import { PowerUpMaterial } from "../materials/PowerUpMaterial";

export class PowerUp extends TransformNode {
    private skin: Mesh;
    public constructor(size: number) {
        super("powerUp");
        this.skin = MeshBuilder.CreateBox("power-up-skin", { size: size });
        this.skin.setParent(this);
        this.skin.material = new PowerUpMaterial(this.getScene());
    }
    public intesectWith(mesh: Mesh): boolean {
        return this.skin.isVisible && this.skin.intersectsMesh(mesh);
    }
    public setVisible(value: boolean): void {
        this.skin.isVisible = value;
    }
}