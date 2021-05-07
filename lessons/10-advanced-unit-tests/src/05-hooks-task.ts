import { useEffect, useRef } from "react"

type Handler = (event: Event) => void
type Props = {
  eventName: string;
  handler: Handler;
  element: Element;
}

export const useEventListener = ({ eventName, handler, element }: Props) => {
  const savedHandler = useRef<Handler>(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) {
      return
    }

    const eventListener: Handler = (event) => savedHandler.current(event)
    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
