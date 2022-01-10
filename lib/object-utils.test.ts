import { isObject, isEqual } from "./object-utils"

describe('Object utility function', () => {
  it('should check if type is object', () => {
    expect(isObject({hello: 'world'})).toBe(true)
  })

  it('should check if objects are equal', () => {
    expect(isEqual({hello: 'world'}, {hello: 'world'})).toBe(true)
  })
})