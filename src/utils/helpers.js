import { firstNames, lastNames } from '@/data/names.js'
import { colors } from '@/data/colors.js'
import { MIN_HORSE_CONDITION, MAX_HORSE_CONDITION } from '@/constants/horses.js'

export function * idMaker () {
  let id = 1
  while (true) yield id++
}

export const getRandomNumber = (max, min = 0) => min + Math.floor(Math.random() * max)

export const getRandomHorseName = () => {
  return `${firstNames[getRandomNumber(firstNames.length)]} ${lastNames[getRandomNumber(lastNames.length)]}`
}

export const getRandomHorseColor = () => {
  return colors[getRandomNumber(colors.length)]
}

export const getRandomHorseCondition = () => {
  return getRandomNumber(MAX_HORSE_CONDITION, MIN_HORSE_CONDITION)
}
