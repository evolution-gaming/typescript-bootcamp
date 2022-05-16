import { HemisphericLight, ArcRotateCamera, Engine, Scene, Vector3 } from "@babylonjs/core";
import { Exercise } from "./types";

export abstract class ExerciseBase implements Exercise {
    protected readonly engine: Engine;
    protected readonly canvas: HTMLCanvasElement;
    protected readonly scene: Scene;

    public constructor() {
        this.canvas = this.createCanvas();
        this.engine = this.createEngine(this.canvas);
        this.scene = this.createScene(this.engine);
        this.createCamera(this.scene);
        this.createLight(this.scene);
        this.addContent();
        window.addEventListener("resize", this.onResize);
        this.engine.runRenderLoop(this.onRender);
    }
    public start(): void {
        this.onResize();
    }
    protected createCanvas(): HTMLCanvasElement {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        return canvas;
    }
    protected createEngine(canvas: HTMLCanvasElement): Engine {
        return new Engine(canvas, true, {}, true);
    }
    protected createScene(engine: Engine): Scene {
        return new Scene(engine, {});
    }
    protected createCamera(scene: Scene): void {
        const camera = new ArcRotateCamera("camera", -Math.PI  * 0.5, Math.PI * 0.25, 12, Vector3.Zero(), scene);
        camera.attachControl();
    }
    protected createLight(scene: Scene) {
        const lights = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    }
    protected abstract addContent(): void;
    private onRender = () => {
        this.scene.render();
    }
    private onResize = () =>  {
        this.engine.resize();
    }
}
