import { Vector } from "../types/common/interfaces"

export const PHI = 1.618

export const radiansToDegrees = (rad: number): number => (rad * 180.0) / Math.PI

export function getAngleBetweenPoints(pointSource: Vector, pointTarget: Vector): number {
  return (radiansToDegrees(Math.atan2(pointSource.y - pointTarget.y, pointTarget.x - pointSource.x)) - 90) * -1
}

export function getDistanceBetweenPoints(pointSource: Vector, pointTarget: Vector): number {
  return Math.sqrt(
    Math.pow(pointSource.x - pointTarget.x, 2) +
    Math.pow(pointSource.y - pointTarget.y, 2)
  )
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}