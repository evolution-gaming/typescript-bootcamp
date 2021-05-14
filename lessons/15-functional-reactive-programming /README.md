# Functional Reactive Programming

### Agenda

- Imperative code vs Reactive code
- Basic principles of Reactive code
- Functional programming 
- Code examples

#### What is Reactive code?

`a = b + c`

#### Example

```typescript
const COUNTDOWN_SECONDS = 10;

// elem refs
const remainingLabel = document.getElementById('remaining');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');

let timerValue = COUNTDOWN_SECONDS;
let timerID = null;

const createTimer = () => {
  timerID = setInterval(() => {
    timerValue = timerValue - 1;
    if (timerValue < 0) {
      clearInterval(timerID);
      return;
    }
    remainingLabel.innerHTML = timerValue.toString();
  }, 1000)
}

pauseButton.addEventListener('click', () => clearInterval(timerID));
resumeButton.addEventListener('click', createTimer);

createTimer();
```
Using RxJS:

```typescript
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

const COUNTDOWN_SECONDS = 10;

// elem refs
const remainingLabel = document.getElementById('remaining');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');

// streams
const interval$ = interval(1000).pipe(mapTo(-1));
const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

const timer$ = merge(pause$, resume$)
  .pipe(
    startWith(true),
    switchMap(val => (val ? interval$ : empty())),
    scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
    takeWhile(v => v >= 0)
  )
  .subscribe((val: any) => remainingLabel.innerHTML = val);
```

### Useful links
- [RxJS](https://www.learnrxjs.io/learn-rxjs/recipes/battleship-game)
- [KefirJS](https://kefirjs.github.io/kefir/)
- [MostJS](https://github.com/cujojs/most)
- [BaconJS](https://baconjs.github.io)
  

- [RamdaJS](https://ramdajs.com)
- [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide)
