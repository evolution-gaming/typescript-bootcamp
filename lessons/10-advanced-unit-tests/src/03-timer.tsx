import React, { useEffect, useState } from "react"
import { getUTCDatetime } from "./time"

export const Timer = () => {
  const [datetime, setDatetime] = useState(getUTCDatetime())
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) {
      return
    }

    const intervalId = setInterval(() => setDatetime(getUTCDatetime()), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [running])

  return (
    <>
      <div data-testid={"datetime"}>{datetime}</div>
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>stop</button>
    </>
  )
}

