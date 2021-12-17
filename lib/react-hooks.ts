import { useEffect } from "react"

export const useWindowEvent = (event: string, callback: (event: Event) => void) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export const useGlobalMouseUp = (callback: (event: Event) => void) => {
  return useWindowEvent('mouseup', callback)
}

export const useGlobalMouseMove = (callback: (event: Event) => void) => {
  return useWindowEvent('mousemove', callback)
}