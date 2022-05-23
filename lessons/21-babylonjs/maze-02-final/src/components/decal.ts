import { AbstractMesh, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";
import { TextureId } from "../consts";

export type DecalDraw = (target: AbstractMesh, position: Vector3, normals: Vector3) => void;

export function createDecal(scena: Scene): DecalDraw {
    const decalMaterial = new StandardMaterial("decal-material", scena);
    decalMaterial.diffuseTexture = scena.getTextureByName(TextureId.Decal);
    decalMaterial.diffuseTexture.hasAlpha = true;
    decalMaterial.zOffset = -2;
    const decalSize = new Vector3(0.5, 0.5, 0.5);

    return (target: AbstractMesh, position: Vector3, normals: Vector3) => {
        const decal = MeshBuilder.CreateDecal(
            `decal-${Math.random() + Date.now()}`,
             target,
            { 
                position: position,
                normal: normals,
                size: decalSize
            }
        );
        decal.material = decalMaterial;
    };
}