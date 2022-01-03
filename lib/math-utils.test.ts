import { getAngleBetweenPoints, getDistanceBetweenPoints, PHI, radiansToDegrees } from "./math-utils"

describe('Math utility functions', () => {
  it('should convert radians to degress', () => {
    expect(radiansToDegrees(Math.PI / 2)).toBe(90)
  })

  it('should get the distance between 2 points', () => {
    expect(getDistanceBetweenPoints({x:0, y:0}, {x: 300, y: 400})).toBe(500)
  })

  it('should get the angle between 2 points', () => {
    expect(getAngleBetweenPoints({x: 100, y: 200}, {x: 200, y: 100})).toBe(45)
  })

  it('should know PHI', () => {
    expect(PHI).toBe(1.618)
  })
})