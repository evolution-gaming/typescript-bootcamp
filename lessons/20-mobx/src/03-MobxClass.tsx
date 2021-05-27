import React from "react"
import { action, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

class Timer {
  secondsPassed = 0
  private intervalId: number | undefined = undefined

  constructor() {
    makeAutoObservable(this, {
      startTimer: action.bound,
      endTimer: action.bound,
    })
  }

  get isTimerStarted() {
    return this.intervalId !== undefined
  }

  private increaseTimer() {
    this.secondsPassed += 1
  }

  startTimer() {
    this.intervalId = window.setInterval(() => {
      this.increaseTimer()
    }, 1000)
  }

  endTimer() {
    clearInterval(this.intervalId)
    this.intervalId = undefined
  }
}


const TimerComponent: React.FC<{ timer: Timer }> = observer(({ timer }) => {
  return (
    <>
      <span>Seconds passed: {timer.secondsPassed}</span>
      <br />
      <br />
      <button disabled={timer.isTimerStarted} onClick={timer.startTimer}>
        Start timer
      </button>
      <button disabled={!timer.isTimerStarted} onClick={timer.endTimer}>
        End timer
      </button>
    </>
  )
})

export const App = () => {
  const myTimer = new Timer()
  return <TimerComponent timer={myTimer} />
}
