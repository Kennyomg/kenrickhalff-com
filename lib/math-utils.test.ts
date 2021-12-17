import { radiansToDegrees } from "./math-utils"

describe('Math utility functions', () => {
  it('should convert radians to degress', () => {
    expect(radiansToDegrees(Math.PI / 2)).toBe(90)
  })
})