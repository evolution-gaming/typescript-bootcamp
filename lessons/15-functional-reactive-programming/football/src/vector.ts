export type Vector = [number, number]

export const vector = (x: number, y: number): Vector => [x, y]

export const x = (v: Vector) => v[0]

export const y = (v: Vector) => v[1]

export const add = (a: Vector, b: Vector) => vector(x(a) + x(b), y(a) + y(b))

export const subtract = (a: Vector, b: Vector) => vector(x(a) - x(b), y(a) - y(b))

export const scalar = (v: Vector, c: number) => vector(x(v) * c, y(v) * c)

export const dot = (a: Vector, b: Vector) => x(a) * x(b) + y(a) * y(b)

export const reflect = (a: Vector, n: Vector) => subtract(a, scalar(n, 2 * dot(a, n)))

export const top = () => vector(0, -1)

export const bottom = () => vector(0, 1)

export const left = () => vector(1, 0)

export const right = () => vector(-1, 0)
