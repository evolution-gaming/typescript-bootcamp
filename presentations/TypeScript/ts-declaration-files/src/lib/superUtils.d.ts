// `declare` specifies a type to an already existing variable, not declaring a new one.

export declare function compact<T>(array: T[]): NonNullable<T>[];

export declare const AUTHOR_NAME: string;

// Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.
// An implementation cannot be declared in ambient contexts.
// export function asd(arg: string): number;

// Initializers are not allowed in ambient contexts.
// const DEFAULT_VALUE_1: Record<string, number> = {};
// A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.
// const DEFAULT_VALUE_2 = {};

declare const AUTHOR_SURNAME: 'Kiselyov';
// declare const AUTHOR_SURNAME = 'Kiselyov'; // same
export default AUTHOR_SURNAME;



// export declare namespace superUtils {
//     function compact<T>(array: T[]): NonNullable<T>[];

//     const AUTHOR_NAME: string;

//     const AUTHOR_SURNAME: 'Kiselyov';
// }
