import React from "react"
import { useTimer } from "./04-hooks"

export const Timer = () => {
  const { datetime, start, stop } = useTimer()

  return (
    <>
      <div data-testid={"datetime"}>{datetime}</div>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </>
  )
}
