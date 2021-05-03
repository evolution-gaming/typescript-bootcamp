import React, { useCallback, useEffect, useState } from "react"
import { getUTCDatetime } from "./time"

export const useTimer = () => {
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

  const start = useCallback(() => setRunning(true), [])
  const stop = useCallback(() => setRunning(false), [])

  return {
    datetime,
    start,
    stop,
  }
}
