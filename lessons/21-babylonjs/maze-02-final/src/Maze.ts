import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import { GameBase } from "./common/GameBase";
import maze from "../assets/maze.json";
import { MazeMap } from "./components/mazeMap";
import { AssetsManager, DirectionalLight, HemisphericLight, Scene, ShadowGenerator, Vector3 } from "@babylonjs/core";
import { Player } from "./components/player";
import { Model, TextureId } from "./consts";
import { PowerUpPickup } from "./utils/powerUpPickup";
import { createDecal } from "./components/decal";


export class Maze extends GameBase {
    private light: DirectionalLight;

    protected addContent(): void {
        this.boot()
            .then(() => {
                const map = new MazeMap(this.scene, maze.maze);

                const player = new Player(this.scene, Model.Player, createDecal(this.scene));
                player.position.copyFrom(map.playerStartPosition);

                const skyBoxTexture = this.scene.getTextureByName(TextureId.Skybox);
                this.scene.createDefaultSkybox(skyBoxTexture);
                this.scene.environmentTexture = skyBoxTexture;

                new PowerUpPickup(this.scene, map.getPowerUp(), player);
                
                const shadowGenerator = new ShadowGenerator(2048, this.light);
                shadowGenerator.addShadowCaster(player.colliderMesh, true);
                shadowGenerator.usePercentageCloserFiltering = true;

                this.scene.debugLayer.show();
            })
    }

    private boot(): Promise<void> {
        const assetManager = new AssetsManager(this.scene);
        assetManager.addMeshTask(
            "load-player", 
            "", 
            "https://www.babylonjs-playground.com/scenes/dummy3.babylon", 
            ""
        );
        assetManager.addCubeTextureTask("load-skybox", TextureId.Skybox);
        assetManager.addTextureTask("load-ground", TextureId.Ground);
        assetManager.addTextureTask("load-wall", TextureId.Wall);
        assetManager.addTextureTask("load-decal", TextureId.Decal);
        assetManager.addTextureTask("load-normal-map", TextureId.NormalMapWall);
        return assetManager.loadAsync();
    }

    protected createLight(scene: Scene): void {
        const evnLight = new HemisphericLight("evnLight", new Vector3(0, 1, 0), scene);
        evnLight.intensity = 0.5
        this.light = new DirectionalLight("light", new Vector3(-1, -2, -2), scene);
        this.light.position.y = 40;
    }
}