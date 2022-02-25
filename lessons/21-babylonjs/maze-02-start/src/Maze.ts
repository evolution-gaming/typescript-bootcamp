import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import { GameBase } from "./common/GameBase";
import maze from "../assets/maze.json";
import { MazeMap } from "./components/mazeMap";
import { AssetsManager, CubeTexture } from "@babylonjs/core";
import { Player } from "./components/player";
import { Model, TextureId } from "./consts";


export class Maze extends GameBase {
    protected addContent(): void {
        this.boot()
            .then(() => {
                const map = new MazeMap(this.scene, maze.maze);

                const player = new Player(this.scene, Model.Player);
                player.position.copyFrom(map.playerStartPosition);

                const skyBoxTexture = this.scene.getTextureByName(TextureId.Skybox);
                this.scene.createDefaultSkybox(skyBoxTexture);
                this.scene.environmentTexture = skyBoxTexture;
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
        return assetManager.loadAsync();
    }
}