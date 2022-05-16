import { ArcRotateCamera, Engine, HemisphericLight, Scene, Vector3 } from "@babylonjs/core";
import { Exercise } from "../../common/types";

export class Exercise01 implements Exercise {
    public start(): void {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        const engine = new Engine(canvas, true, {}, true);
        const scene = new Scene(engine, {});
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        const camera = new ArcRotateCamera("camera", -Math.PI * 0.5, Math.PI * 0.25, 12, Vector3.Zero(), scene);
        engine.runRenderLoop(() => {
            scene.render();
        });
        const onResize = () => {
            engine.resize();
        };
        window.addEventListener("resize", onResize);
        onResize();
    }

}
