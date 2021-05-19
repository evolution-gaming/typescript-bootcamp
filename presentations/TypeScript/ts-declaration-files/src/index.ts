import SURNAME, { compact, AUTHOR_NAME } from "./lib/superUtils";
// import type { Direction } from "./constants";
import { Direction } from "./constants";
// declare modules/object/variables: ./global-types/declaration.d.ts
import * as TSGuru from "./asserts/ts_guru.png";

const DIRECTIONS: Direction[] = [
    Direction.Down,
    Direction.Right,
];

const DIRTY_DIRECTIONS: (Direction | null | undefined)[] = [
    Direction.Down,
    undefined,
    Direction.Right,
    null,
];

// declare types for js files: ./lib/superUtils
const onlyRealDirections = compact(DIRTY_DIRECTIONS);

const authorName = AUTHOR_NAME;
const authorSurname = SURNAME;

// define types for js files: ./global-types/CustomUtilityTypes.d.ts
const NumberByDirection: PartialRecord<Direction, number> = {
    [Direction.Right]: 312,
};

// declare modules/object/variables: ./global-types/declaration.d.ts
JSON_007.stringify();

// extend native objects: ./global-types/global.d.ts
window.DEV_MODE;
[].customFilter();
