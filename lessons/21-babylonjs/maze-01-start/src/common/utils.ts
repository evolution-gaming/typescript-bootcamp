import { TransformNode, Vector3 } from "@babylonjs/core";

export function getSize(node: TransformNode): Vector3 {
    const sizes = node.getHierarchyBoundingVectors();
    return new Vector3(
        sizes.max.x - sizes.min.x,
        sizes.max.y - sizes.min.y,
        sizes.max.z - sizes.min.z,
    );
}