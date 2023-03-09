# TypeScript Tips

## Do's And Don'ts (Best Practices)

These common rules and best practices are intended to help your code to become
as safe, strict, readable and maintainable as possible.

![TypeScript Guru](./ts-declaration-files/src/asserts/ts_guru.png)

### **1. DO NOT USE**

#### **1.1 DO NOT EVER use `Number`, `String`, `Boolean`, `Symbol`, or `Object` types**

<u>Reason</u>: Don’t ever use the types `Number`, `String`, `Boolean`,
`Symbol`, or `Object`. These types refer to non-primitive boxed objects that
are almost never used appropriately in JavaScript code. These type names
(starting with capital letter) are legal, but refer to some special built-in
types that will very rarely appear in the code. **Always use `number`,
`string`, `boolean`, `symbol` and `object` for types.**

More information you can find in this example:
[object VS Object](https://2ality.com/2020/01/typing-objects-typescript.html#object-vs.-object-in-typescript).

#### **1.2 DO NOT use `Function` type**

<u>Reason</u>: Don’t use the `Function` type, most likely, you will never need
it. It doesn't define a type for the functions. It only says that this is
something callable. You lose all the types for arguments and the return type
is `any`. **Always define the function type as precise and correct as possible!**

Example:

```typescript
// Very Bad

function invoke(callback: Function): void {
    // you can pass any number of parameters and any kind of parameters
    const result = callback(1, 2, 3, true);
    // `result` has `any` type

    return result;
}
```

```typescript
// Good

function invoke(callback: (time: number) => void): void {
    // you have a control under a number of parameters and their types
    callback(Date.now());
    // you receive a clear return type of the `callback`
}
```

#### **1.3 DO NOT use `any` type**

<u>Reason</u>: Don’t use the `any` type. `any` turns off all the types checking
and usage of TypeScript loses the whole sense at all. Moreover, it leads to
runtime errors. **Avoid `any` usage wherever only possible and define proper
types!**

> Use the `unknown` type if you don't know what type you have. This is a safe
variety of `any` that helps to avoid runtime errors.

Example:

```typescript
// Very Bad

let array: any = [1, 2, 3];
array = null;
array = true;

// RUNTIME ERROR here
array.forEach(item => console.log(item));
```

```typescript
// Good

let array: number[] = [1, 2, 3];
// TS will not allow inappropriate assignments
// array = null;
// array = true;

array.forEach(item => console.log(item));
```

#### **1.4 DO NOT use `{}` type**

<u>Reason</u>: Don’t use the `{}` type because it doesn't mean an *empty
object* type that you likely expect. `{}` is literally the `Object` type.
[Read more](#11-do-notever-use-number-stringbooleansymbol-orobject-types).
**Avoid using the `{}` type wherever only possible and define proper types!**

Example:

```typescript
// Very Bad

let emptyObj: {} = {};

// this doesn't work due to TS error
// emptyObj.prop = 123;

// but the following is ok
emptyObj = 'hello';
emptyObj = 123;
emptyObj = false;
```

```typescript
// Good

let emptyObj: Partial<Record<string, number>> = {};
// works fine
emptyObj.prop = 123;

// TS will not allow inappropriate assignments
// emptyObj = 'hello';
// emptyObj = 123;
// emptyObj = false;
```

#### **1.5 DO NOT use Non-null Assertion Operator (Postfix`!`) if possible**

<u>Reason</u>: Don’t use the Non-null Assertion Operator (`!`) because you
enforce TypeScript to get rid of `null` and `undefined` types. In most cases
you can avoid using `!` via the `Optional chaining` operator (`?`) or using a
condition check. Don't use it until you really ensure that you will not receive
`null` or `undefined`, otherwise, it can lead to runtime errors.
**Avoid using `!` until you ensured that you will not receive `null` or
`undefined`!**

Example:

```typescript
// Bad

const button = document.querySelector('.selector'); // Element | null
// DO NOT trust anybody
button!.innerHTML;
```

```typescript
// Good

const button = document.querySelector('.selector'); // Element | null
// let TS make sure
button?.innerHTML;

// or this way
if (button) {
    button.innerHTML;
}
```

Where you can really need `!`:

```typescript
// Ok

function getFirst(array: number[]): number {
    // you have a check here but TS doesn't understand it
    if (array.length === 0) {
        return 0;
    }

    return array.shift()!;
}

function goThroughStack(stack: number[]): number[] {
    const newArray: number[] = [];

    // you have a check here but TS doesn't understand it
    while (stack.length > 0) {
        const lastValue = stack.pop()!;
        // do something...
        newArray.push(lastValue);
    }

    return newArray;
}

function groupById(array: [id: string, value: number][]): Partial<Record<string, number[]>> {
    const objMap: Partial<Record<string, number[]>> = {};

    array.forEach(([id, value]) => {
        // you guarantee a receiving of an array here but TS doesn't understand it
        objMap[id] ??= [];
        objMap[id]!.push(value);
    });

    return objMap;
}
```

#### **1.6 DO NOT use Type Assertions (`as`) if possible**

<u>Reason</u>: Don’t use Type Assertions (`as`) because you
enforce TypeScript to accept another type instead of the current one. In most
cases you can avoid using `as` via a correct condition check. Don't use it
until you really ensure that you will not receive any other type, otherwise,
it can lead to runtime errors. **Avoid using Type Assertions (`as`) until you
ensured that you will never receive another type!**

Example:

```typescript
interface MyObj {
    method: () => number;
}

// Bad

const myObj = {} as MyObj;
myObj.method(); // RUNTIME ERROR

// Bad

function run(arg: string | number | boolean[] | null | undefined): string {
    return (arg as string).toUpperCase(); // RUNTIME ERROR
}

// Very Bad

const ID = 12 as unknown as string;
ID.toUpperCase(); // RUNTIME ERROR

// Very Bad

const NAME = 'Name' as any as number;
NAME.toFixed(); // RUNTIME ERROR
```

```typescript
interface MyObj {
    method: () => number;
}

// Good

const myObj: MyObj = {
    method: () => Math.random(),
};
myObj.method();

// Good

function run(arg: string | number | boolean[] | null | undefined): string {
    // TS automatically removes `null` and `undefined` types after such a check
    if (!arg) {
        return '';
    }
    // now `arg` type is `string | number | boolean[]`

    // TS automatically recognizes `boolean[]` type after `instanceof` check
    if (arg instanceof Array) {
        return arg.join(' - ');
    }
    // now `arg` type is `string | number`

    // TS automatically recognizes `number` type after `typeof` check
    if (typeof arg === 'number') {
        return arg.toFixed();
    }
    // now `arg` type is `string`

    // TS automatically recognizes `string` type due to types narrowing
    return arg.toUpperCase();
}
```

#### **1.7 DO NOT EVER use `@ts-ignore`**

<u>Reason</u>: Don’t ever use `@ts-ignore` that basically turns off a
TypeScript compiler. You always have to correctly resolve compiler issues when
they appear via a correct and precise types definition or via the programming
language efforts. Otherwise, it can lead to runtime errors and the usage of
TypeScript loses the whole of its sense. **DO NOT EVER use `@ts-ignore` in your
codebase!**

### **2. `Type` VS `Interface`**

There is some difference between declaration types via `type` either `interface`
keyword:

- `type` declares a *Type Alias* that exactly means *a name for any type*. It
  can be any object, literal, union or intersection type.
- An `interface` declaration is just a way to name an object type. Interfaces
  may only be used to declare the shapes of object, not re-name primitives.
- Interface names (declared via `interface`) will always appear in their
  original form in error messages, but only when they are used by name.
  Type names (declared via `type`) can't guarantee this.
- Type aliases may not participate in declaration merging, but interfaces can.

For the most part, you can choose based on personal preference, and TypeScript
will tell you if it needs something to be the other kind of declaration. If you
would like a heuristic, **always use `interface` until you need to use features
from `type`**.

[Read more](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).

### **3. Types Definition**

#### **3.1 Types Declaration or Automatically Inferred Types**

Sometimes there are some unclear situations whether you should define a type or
leave it for TypeScript to automatically infer it.

Let's consider some common such situations:

1. Don't define a type when you declare literal variables via `const`. Help
   TypeScript to be as strict as possible.

```typescript
// Bad

const str: string = 'v123'; // string
const num: number = 123;    // number

// you turn off some features where TS could define obvious things
if (num === 1) { // this is always true but TS can't defect it anymore
    // do something...
}
```

```typescript
// Good

const str = 'v123'; // 'v123'
const num = 123;    // 123

// TS says: This condition will always return 'false' since the types '123' and '1' have no overlap.
if (num === 1) {
    // do something...
}
```

2. Don't define a type when you declare literal variables via `let` and
   immediately specify a value.
   
> Except when you need to have a variety of types. See the next point.

```typescript
// Bad

let str: string = 'v123';   // string
let num: number = 123;      // number
```

```typescript
// Good

let str = 'v123';   // string
let num = 123;      // number
```

3. Do define a type when you declare literal variables via `let` if immediately
   specify a value but there could be a variety of types.

```typescript
// Bad

let id = 123; // number
id = 'v123';  // TS error: Type 'string' is not assignable to type 'number'.
```

```typescript
// Good

let id: string | number = 123; // string | number
id = 'v123';
```

4. Do always define a type when you declare any variables via `let` if don't
   immediately specify a value. Otherwise, your variable will have an `any`
   type. [Read more about `any`](#13-do-not-use-any-type).

```typescript
// Bad

let str;        // any
str = 'v123';
str = 123;
str = {};
```

```typescript
// Good

let str: string; // string
str = 'v123';
```

5. Do always define a type for empty arrays. Otherwise, your variable will have
   an `any[]` type. [Read more about `any`](#13-do-not-use-any-type).

```typescript
// Bad

const arr = [];  // any[]
arr.push(1, true, 'str');

let ids = [];    // any[]
ids.push(1, true, 'str');
```

```typescript
// Good

const arr: string[] = [];  // string[]
arr.push('str1', 'str2', 'str3');

let ids: number[] = [];    // number[]
ids.push(1, 2, 3);
```

6. Do always define a type for empty objects. Otherwise, your variable will
   have an `{}` type. [Read more about `{}`](#14-do-not-use--type).

```typescript
// Bad

const obj1 = {};  // {}

let obj2 = {};    // {}
obj2 = 123;
```

```typescript
// Good

const obj1: Partial<Record<string, number>> = {};

let obj2: Partial<Record<string, number>> = {};
obj2.prop = 123;
```

> Do not forget to specify `as const` for objects that have to be never
changed. In this case doesn't make sense to define a type. You will receive
very strictly typed object that can't be changed. `as const` works recursively
and applies `readonly` for all nested objects.

Example:

```typescript
// Good

const ratio = {
    double: 2,
    triple: 3,
} as const;
```

7. ***Common rule***: Do always define a type when you declare something. Do not define a type when you use something already typed or for the calculated result of typed variables or functions.

> Always define parameters types for the function and a return type.
[Read more about types in functions](#5-function).

```typescript
// Bad

const randomNumber: number = Math.random();
const value: number = randomNumber * 100 / 2;

function isFalsy(value) {
    return !!value;
}

const isValueFalsy: boolean = isFalsy(value);

const array: number[] = [1, 2, 3];
array.map((item: number, index: number, array: number[]) => {
    return item + (array[index - 1] || 0);
});
```

```typescript
// Good

const randomNumber = Math.random();
const value = randomNumber * 100 / 2;

function isFalsy(value: unknown): boolean {
    return !!value;
}

const isValueFalsy = isFalsy(value);

const array = [1, 2, 3];
array.map((item, index, array) => {
    return item + (array[index - 1] || 0);
});
```

#### **3.2 Use Utility Types**

Carefully study all the existing
[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
in TypeScript that are available everywhere in your code without any imports.
**Boldly use any Utility Type** and it will definitely help to write types
correctly and easier infer types where needed. Do not try to invent already
existing things and do not pollute the code with duplicates.

Example:

```typescript
// Bad

const myObj: { [key: string]?: number } = {};
myObject.prop = 123;
```

```typescript
// Good

const myObject: Partial<Record<string, number>> = {};
myObject.prop = 123;
```

Also, do not hesitate to **implement you own custom Utility Types** if needed
via [Declaration Files](ts-declaration-files/README.md) and use them even
without explicit importing. It becomes obvious when you often need some common
generic type in different places. And do not write global types if
[you aren't gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it),
and you do not use them anywhere for now, e.g., just in case or for future needs.

Example:

```typescript
// somewhere in .d.ts file (e.g., MyCustomUtilityTypes.d.ts)

type PartialRecord<K extends string | number | symbol, V> = Partial<Record<K, V>>;
```

```typescript
// somewhere in your code (e.g., code.ts)

const myObject: PartialRecord<string, number> = {};
myObject.prop = 123;
```

#### **3.3 Don't repeat yourself**

[Don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
and use
[single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)
even when you write types. Do not write the same type several times if you know
that the objects should have the same interface - declare a type and reuse it.
And think of declaring a type if you write the same type even twice.

Example:

```typescript
// Bad

function validateObjects(
    obj1: Record<string, number>,
    obj2: Record<string, number>,
): Record<string, number> {
    const validatedObj: Record<string, number> = {};
    // do something...
    return validatedObj;
}

// Very Bad

function validateObjects(
    obj1: { prop: string },
    obj2: { prop: string },
): { prop: string } {
    const validatedObj: { prop: string } = {
        prop: obj1.prop || obj2.prop || 'default',
    };

    return validatedObj;
}
```

```typescript
// Good

type MyObject = Record<string, number>;

function validateObjects(
    obj1: MyObject,
    obj2: MyObject,
): MyObject {
    const validatedObj: MyObject = {};
    // do something...
    return validatedObj;
}

// Good

interface ObjectWithProp {
    prop: string;
}

function validateObjects(
    obj1: ObjectWithProp,
    obj2: ObjectWithProp,
): ObjectWithProp {
    const validatedObj: ObjectWithProp = {
        prop: obj1.prop || obj2.prop || 'default',
    };

    return validatedObj;
}
```

#### **3.4 Naming Collisions**

Names of the types and any kind of variables (function, class, object, literal,
etc.) always have to be correct, readable and independent. If you have naming
collisions between types and their implementations, you have at least two
options to resolve it correctly:

1. Have the same names but in separate modules (files) and rename during import when needed:

```typescript
import { MyClass as IMyClass } from './types';

export default class MyClass<T> implements IMyClass<T> { /* ... */ }
```

2. Have a different name for the interface (`I` prefix is a common approach for that):

```typescript
interface IMyClass<T> {
  /* ... */
}
```

### **4. Enum**

#### **4.1 Enum naming convention**

To be consistent and write a readable and understandable code for all the
people, there are some common generally accepted rules when you write enums:
- ✅ Use PascalCase for Enum types and value names.
- ✅ Use a singular name for Enum types.
- ❌ Do not use an Enum suffix on Enum type names.

```typescript
// Good

enum CardinalPoint {
    // Enum string values don't matter. They are just constants.
    North = 'north',
    South = 'SOUTH',
    West = 'West',
    SouthEast = 'south_east',
}

// Bad

// NO `enum` suffix
enum CardinalPointEnum {
    // UPPERCASE instead of PascalCase
    NORTH = 'north',
    // Snake_Case instead of PascalCase
    South_East = 'south_east',
    // camelCase instead of PascalCase
    southWest = 'south_west',
}

// Bad

// NO plural name
enum CardinalPoints {
    North = 'north',
    South = 'south',
}
```

#### **4.2 Always declare string values for enum**

<u>Motivation</u>: There are some annoying pitfalls when you use numeric enums
with auto-generated numeric values:
- **Really hard to debug**. You don't understand, what the value you receive
  without going to enum implementation.
- **The values depend on the order in enum implementation**. If you have tests
  that relied on the enum values or snapshots, you will always need to update
  tests and snapshots when you add new values (not in the end) or change the
  enum member order.
- You can meet **unexpected behavior** working with numeric enum (e.g.,
  `Object.keys(MyEnum)` or `Object.values(MyEnum)`) because of
  [reverse mappings](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings)

```typescript
// Good

enum CardinalPoint {
    North = 'north',
    South = 'south',
    West = 'west',
}

// Bad

enum CardinalPoint {
    North, // 0
    South, // 1
    West,  // 2
}

// Bad

enum CardinalPoint {
    North = 10,
    South, // 11
    West,  // 12
}
```

Acceptable to have numeric enums if you define all the values and these values
accord their names.

> But in this case, you always have to keep in your mind that
[reverse mapping](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings)
still works.

Example:

```typescript
// Ok

enum Ratio {
    Half = 0.5,
    Double = 2,
    Triple = 3,
}
```

### **5. Function**

#### **5.1 Always define parameters types**

<u>Reason</u>: Always define all the parameters types in functions, otherwise,
they have `any` type. [Read more about `any`](#13-do-not-use-any-type).

```typescript
// Bad

function doSomeLogic(arg1, arg2, arg3, arg4) {
    // do something...
}
```

```typescript
// Good

function doSomeLogic(
    arg1: () => void,
    arg2: boolean,
    arg3: string,
    arg4: number,
): void {
    // do something...
}
```

> Acceptable to use a third-party interface to implement a function according
to it.

Example:

```typescript
// Good

import * as React from 'react';

const onInputChange: React.ChangeEventHandler<HTMLButtonElement> = event => {
    setInputValue(event.target.value);
};
```

#### **5.2 Always define a return type**

<u>Reason</u>: Always define a return type for functions and methods. This
helps to avoid hidden unexpected behavior, increases the productivity of
TypeScript and extremely increases the readability of the implementation
(without diving deep into the logic). Moreover, it adds some restrictions and
when somebody will change something inside the function, you are always
confident that it will not affect the contract, or it will enforce to
explicitly change the contract.

```typescript
// Bad

function doSomeLogic(value: string) {
    // imagine very long function body with a lot of conditions and returns
    // what a type returns the function?
}

const someObj = {
    doIt() {
        // do something...
    },
    doItLater: (time: number) => {
        // do something...
    },
};

class MyClass {
    private id: number;

    constructor(arg: boolean) {
        this.id = arg ? Math.random() : Date.now();
    }

    public doIt() {
        // do something...
    }

    public doItLater = (time: number) => {
        // do something...
    };
}
```

```typescript
// Good

function doSomeLogic(value: string): boolean {
    return !!value;
}

const someObj = {
    doIt(): string {
        // do something...
        return Date.now().toFixed();
    },
    doItLater: (time: number): void => {
        // do something...
    },
};

class MyClass {
    private id: number;

    // no needs to define a return type for `constructor`
    // TS says: Type annotation cannot appear on a constructor declaration.
    constructor(arg: boolean) {
        this.id = arg ? Math.random() : Date.now();
    }

    public doIt(): string {
        // do something...

        return '';
    }

    public doItLater = (time: number): void => {
        // do something...
    };
}
```

#### **5.3 Do not define any types when the function type declared**

<u>Reason</u>: Do not define any types when the function type is already
declared. This is redundant and you always get correct types everywhere if the
function type is defined correctly. Moreover, sometimes you can re-define the
type or narrow a type that can lead to runtime errors.

```typescript
// Bad

import * as React from 'react';

const onInputChange: React.ChangeEventHandler<HTMLButtonElement> = (event: HTMLButtonElement): void => {
    setInputValue(event.target.value);
};
```

```typescript
// Good

import * as React from 'react';

const onInputChange: React.ChangeEventHandler<HTMLButtonElement> = event => {
    setInputValue(event.target.value);
};
```

#### **5.4 Don't need a separate function type**

<u>Reason</u>: Most likely, you will never need to define a separate type for
the functions separately from their implementations. Especially, when you use
it only once.

```typescript
// Bad
type IsFalsy = (value: unknown) => boolean;

const isFalsy: IsFalsy = value => {
    return !!value;
}
```

```typescript
// Good

function isFalsy(value: unknown): boolean {
    return !!value;
}
```

```typescript
// Ok

const isFalsy = (value: unknown): boolean => {
    return !!value;
}
```

### **6. Class**

#### **6.1 Always define access modifiers**

<u>Motivation</u>: Always define access modifiers for all the class' fields.
Need to be consistent and write a readable and understandable code. The code
becomes much more obvious and it looks in a common typed language style.
`constructor` can be an exception here because it, actually, doesn't make a lot
of sense to specify access modifier of the native behavior.

#### **6.2 Use constructor shortcut feature**

<u>Motivation</u>: Use TypeScript constructor shortcut feature when you simply
save accepted arguments inside the class. When you start to use and understand
this syntax, it becomes readable and comfortable, and takes much fewer lines of
the code.

Example:

```typescript
// Goog

class MyClass {
    constructor(
        private value: string,
        public length: number,
        protected time: number,
    ) { }
}
```

Instead of:

```typescript
// Bab

class MyClass {
    public length: number;
    protected time: number;
    private value: string;

    constructor(
        value: string,
        length: number,
        time: number,
    ) {
        this.value = value;
        this.length = length;
        this.time = time;
    }
}
```

#### **6.3 Always define a return type for methods**

<u>Motivation</u> described [here](#52-always-define-a-return-type).

#### **6.4 Keep ordering of the fields by their type**

<u>Motivation</u>: Need to be consistent and write a readable and understandable
code. First of all, you should see what the class exposes to use its instance
(`public` fields). After that, you need to expose what can be used during the
inheritance (`protected` fields). And, finally, the internal implementation of
the class (`private` fields).

The generally accepted approach:

1. static fields (public, protected, private);
2. public properties;
3. protected properties;
4. private properties;
5. constructor;
6. public methods;
7. protected methods;
8. private methods.

Pay attention to an example of a correctly written class:

```typescript
class MyClass {
    public static readonly version = 'v0.1';

    public readonly name = 'MyClass';
    protected timeToStart: number;
    private date: Date;

    // access modifier missed deliberately
    constructor(
        // when you simply save parameters
        private value: string,
        public length: number,
        // when you need some processing
        time: number,
    ) {
        this.timeToStart = time;
        this.date = new Date(time);
    }

    public getValue(): string {
        return this.value;
    }

    protected getTime(time?: number): number {
        return this.calc() + (time || this.timeToStart);
    }

    private calc(): number {
        return this.date.valueOf() / this.length;
    }
}
```

## Useful Links

- Official [TypeScript Documentation](https://www.typescriptlang.org/docs/).
- Official [TypeScript Playground](https://www.typescriptlang.org/play) where
  you can code, see output JavaScript code and play with TypeScript configuration.
- Really nice [TypeScript Cheat Sheet](https://www.sitepen.com/blog/typescript-cheat-sheet).
- Article about [Advanced Generics](https://habr.com/ru/company/yandex/blog/555520/) [RU].
