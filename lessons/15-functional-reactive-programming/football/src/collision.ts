import { bottom, left, reflect, right, top, Vector, x, y } from './vector'

export const topCollide = (v: Vector) => y(v) <= 0
export const bottomCollide = (v: Vector) => y(v) >= 800 - 100
export const rightCollide = (v: Vector) => x(v) >= 1000 - 100
export const leftCollide = (v: Vector) => x(v) < 0

export const direction = (v: Vector, d: Vector): Vector =>
  topCollide(v)
    ? reflect(d, top())
    : bottomCollide(v)
    ? reflect(d, bottom())
    : rightCollide(v)
      ? reflect(d, right())
      : leftCollide(v)
        ? reflect(d, left())
        : d

export const collide = (player: Vector, ball: Vector) =>
  y(ball) + 50 >= y(player) &&
  y(ball) + 50 <= y(player) + 100
