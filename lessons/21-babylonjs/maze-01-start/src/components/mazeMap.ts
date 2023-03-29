import { Scene, Vector3 } from "@babylonjs/core";

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
        // TODO: Fill
    }
}