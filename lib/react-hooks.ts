import { useEffect } from "react"

export const useWindowEvent = (event: string, callback: EventListenerOrEventListenerObject) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export const useGlobalMouseUp = (callback: EventListenerOrEventListenerObject) => {
  return useWindowEvent('mouseup', callback)
}

export const useGlobalMouseMove = (callback: EventListenerOrEventListenerObject) => {
  return useWindowEvent('mousemove', callback)
}