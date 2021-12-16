export function getCurrentRotation(element: HTMLElement, win: Window = window) {
  const style = win.getComputedStyle(element, null)
  const transform = style.getPropertyValue("-webkit-transform") ||
                    style.getPropertyValue("-moz-transform") ||
                    style.getPropertyValue("-ms-transform") ||
                    style.getPropertyValue("-o-transform") ||
                    style.getPropertyValue("transform") ||
                    'none'
  
  if (transform !== "none") {
    const values = transform.split('(')[1].split(')')[0].split(',')
    console.log(values)
    let angle = 0;
    if (values[0].endsWith('deg')) {
      console.log(values[0], values[0].match(/^[0-9]+/g))
      const match = values[0].match(/^[0-9]+/g) || ["0"]
      angle = parseInt(match[0], 10)
    }
    
    if (values.length >= 2) {
      angle = Math.round(Math.atan2(parseInt(values[1], 10), parseInt(values[0], 10)) * (180/Math.PI))
    }

    console.log(angle)

    return (angle < 0 ? angle + 360 : angle)
  }
}