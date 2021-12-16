export function getCurrentRotation(element: HTMLElement) {
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