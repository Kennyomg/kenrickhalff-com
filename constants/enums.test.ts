import { CloudType } from "./enums";

describe('Enums', () => {
  it('should have all the cloud types', () => {
    expect(CloudType.NAV).toBe(0)
    expect(CloudType.CONTENT).toBe(1)
    expect(CloudType.CATEGORY).toBe(2)
    expect(CloudType.POST).toBe(3)
    expect(CloudType.TAG).toBe(4)
  })
})