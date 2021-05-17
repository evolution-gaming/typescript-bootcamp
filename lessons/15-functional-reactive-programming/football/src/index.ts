import { interval, animationFrameScheduler, combineLatest, fromEvent, timer } from 'rxjs'
import { filter, map, pluck, scan, startWith, switchMap, tap } from 'rxjs/operators'
import { add, scalar, subtract, vector, top } from './vector'
import { collide, direction, leftCollide } from './collision'
import { hideMessage, render, showMessage } from './renderer'
import './index.css'

const initialVector = () => vector(0, 300)
const initialDirection = () => vector(10, -10)
const step = () => scalar(top(), 100)

const player$ = fromEvent(document, 'keyup')
  .pipe(
    startWith({ code: '' }),
    pluck('code'),
    scan((acc, key) =>
      key === 'ArrowUp'
        ? add(acc, step())
        : key === 'ArrowDown'
          ? subtract(acc, step())
          : acc,
      initialVector(),
    ),
  )

const ball$ = interval(0, animationFrameScheduler)
  .pipe(
    scan(([ballPosition, dir]) => [
        add(ballPosition, direction(ballPosition, dir)),
        direction(ballPosition, dir),
      ],
      [initialVector(), initialDirection()],
    ),
    map(([ballPosition]) => ballPosition),
  )

const game$ = combineLatest([player$, ball$])
  .pipe(
    tap(render),
    filter(([player, ball]) => leftCollide(ball) && !collide(player, ball)),
    tap(showMessage),
    switchMap(() =>
      timer(1000).pipe(tap(hideMessage)),
    ),
  )

game$.subscribe()
