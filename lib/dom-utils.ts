import { getAngleBetweenPoints, getDistanceBetweenPoints } from "./math-utils"

export function getCurrentRotation(element: HTMLElement): number {
  const style = window.getComputedStyle(element, null)
  const transform = style.getPropertyValue("-webkit-transform") ||
                    style.getPropertyValue("-moz-transform") ||
                    style.getPropertyValue("-ms-transform") ||
                    style.getPropertyValue("-o-transform") ||
                    style.getPropertyValue("transform") ||
                    'none'
  
  if (transform !== "none") {
    const [ value ] = transform.split('rotate(')[1].split(')')[0].split(',')  
    const angle = parseInt((value.match(/^[0-9]+/g) || ["0"])[0], 10)

    return (angle < 0 ? angle + 360 : angle)
  }

  return 0
}

export function getAngleBetweenElements(elementSource: HTMLElement, elementTarget: HTMLElement): number {
  const { x: x1, y: y1 } = elementSource.getBoundingClientRect()
  const { x: x2, y: y2 } = elementTarget.getBoundingClientRect()
  return getAngleBetweenPoints({x: x1, y: y1}, {x: x2, y: y2})
}

export function getDistanceBetweenElements(elementSource: HTMLElement, elementTarget: HTMLElement): number {
  const { x: x1, y: y1 } = elementSource.getBoundingClientRect()
  const { x: x2, y: y2 } = elementTarget.getBoundingClientRect()
  return getDistanceBetweenPoints({x: x1, y: y1}, {x: x2, y: y2})
}