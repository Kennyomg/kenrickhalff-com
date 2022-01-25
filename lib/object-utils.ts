export const isEqual = (obj1: any, obj2: any) => {
  const props1 = Object.getOwnPropertyNames(obj1)
  const props2 = Object.getOwnPropertyNames(obj2)
  
  if (props1.length != props2.length) {
      return false
  }

  for (var i = 0; i < props1.length; i++) {
      let val1 = obj1[props1[i]]
      let val2 = obj2[props1[i]]
      let isObjects = isObject(val1) && isObject(val2)
      
      if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
          return false
      }
  }

  return true
}

export const isObject = (object: Object) => object != null && typeof object === 'object'

export function getRandomFromList(list: Array<any>) {
    return list[Math.floor(Math.random() * list.length)]
}