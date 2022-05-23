import { MeshBuilder, Scene, StandardMaterial, Vector3, Texture } from "@babylonjs/core";
import { TextureId } from "../consts";
import { PowerUp } from "./powerUp";

enum Cell {
    Wall = 1,
    Ground = 0,
    PlayerStart = 2,
    PowerUp = 3,
}

const cellSize = 1.5;
const wallHeight = 2;
const powerUpSize = wallHeight * 0.25;

export class MazeMap {
    public readonly playerStartPosition: Vector3 = new Vector3(0, 0, 0);
    private powerUp: PowerUp;

    public constructor(scene: Scene, source: Cell[]) {
        this.generateMap(scene, source);
    }
    private generateMap(scene: Scene, source: Cell[]): void {
        const mapSize = Math.sqrt(source.length);
        const mapWidth = mapSize * cellSize;
        const mapHeight = mapSize * cellSize;

        const ground = MeshBuilder.CreateGround("ground", {  width: mapWidth, height: mapHeight }, scene);
        const groundMaterial = new StandardMaterial("ground-material", scene);
        const groundTexture = scene.getTextureByName(TextureId.Ground) as Texture;
        groundTexture.uScale = 20;
        groundTexture.vScale = 20;
        groundMaterial.diffuseTexture = groundTexture;
        ground.material = groundMaterial;
        ground.receiveShadows = true;

        const wallMaterial = new StandardMaterial("wall-material", scene);
        const wallTexture = scene.getTextureByName(TextureId.Wall) as Texture;
        wallMaterial.diffuseTexture = wallTexture;
        wallMaterial.bumpTexture = scene.getTextureByName(TextureId.NormalMapWall);
    
        const wallTemplate = MeshBuilder.CreateBox("wall-template", { width: cellSize, height: wallHeight, depth: cellSize }, scene);
        wallTemplate.material = wallMaterial;
        wallTemplate.receiveShadows = true;
        wallTemplate.setEnabled(false);

        for (let i = 0; i < source.length; i++) {
            const column = i % mapSize;
            const row = Math.floor(i / mapSize);
            const cellType = source[i];
            const position = new Vector3(mapWidth * 0.5 - cellSize * 0.5 - cellSize * column, 0, -mapHeight * 0.5  + cellSize * 0.5 + cellSize * row);
            if (cellType === Cell.Wall) {
                const wall = wallTemplate.createInstance(`wall-${i}`);
                wall.position.set(
                    position.x, 
                    wallHeight * 0.5, 
                    position.z,
                );
                wall.checkCollisions = true;
            } if (cellType === Cell.PlayerStart) {
                this.playerStartPosition.copyFrom(position);
            } else if (cellType === Cell.PowerUp) {
                this.powerUp = new PowerUp(powerUpSize);
                this.powerUp.position.set(
                    position.x, 
                    powerUpSize, 
                    position.z,
                );
            }
        }
    }

    public getPowerUp(): PowerUp {
        return this.powerUp;
    }
}