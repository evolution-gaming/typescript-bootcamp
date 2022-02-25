declare module "*.png" {
    var t: string;
    export default t;
}

declare module "*.jpg" {
    var t: string;
    export default t;
}

declare module "*.glsl" {
    var t: "String(GLSLScript)";
    export default t;
}

declare module "*.babylon" {
    const url: "String(Babylon)";
    export default url;
}

declare module "*.json" {
    var t: any;
    export default t;
}

declare module "*.env" {
    var t: "String(BabylonEnv)";
    export default t;
}
