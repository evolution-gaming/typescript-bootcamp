import { MeshBuilder, Scene, StandardMaterial, Vector3, Texture } from "@babylonjs/core";
import { TextureId } from "../consts";

enum Cell {
    Wall = 1,
    Ground = 0,
    PlayerStart = 2,
}

const cellSize = 1.5;
const wallHeight = 2;

export class MazeMap {
    public readonly playerStartPosition: Vector3 = new Vector3(0, 0, 0);
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

        const wallMaterial = new StandardMaterial("wall-material", scene);
        const wallTexture = scene.getTextureByName(TextureId.Wall) as Texture;
        wallMaterial.diffuseTexture = wallTexture;

        for (let i = 0; i < source.length; i++) {
            const column = i % mapSize;
            const row = Math.floor(i / mapSize);
            const cellType = source[i];
            const position = new Vector3(mapWidth * 0.5 - cellSize * 0.5 - cellSize * column, 0, -mapHeight * 0.5  + cellSize * 0.5 + cellSize * row);
            if (cellType === Cell.Wall) {
                const wall = MeshBuilder.CreateBox(`wall-${i}`, { width: cellSize, height: wallHeight, depth: cellSize }, scene);
                wall.position.set(
                    position.x, 
                    wallHeight * 0.5, 
                    position.z,
                );
                wall.material = wallMaterial;
                wall.checkCollisions = true;
            } if (cellType === Cell.PlayerStart) {
                this.playerStartPosition.copyFrom(position);
            }
        }
    }
}