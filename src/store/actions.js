import { HORSES_TOTAL_NUM } from '@/constants/horses.js'
import { idMaker, getRandomHorseName, getRandomHorseColor, getRandomHorseCondition } from '@/utils/helpers.js'

const createHorsesList = () => {
  const horses = []
  const getId = idMaker()

  for (let i = 0; i < HORSES_TOTAL_NUM; i++) {
    const horseId = getId.next().value
    const horseName = getRandomHorseName()
    const horseColor = getRandomHorseColor()
    const horseCondition = getRandomHorseCondition()

    const horse = {
      id: horseId,
      name: horseName,
      color: horseColor,
      condition: horseCondition
    }
    horses.push(horse)
  }
  return horses
}

const actions = {
  init ({ commit }) {
    const horses = createHorsesList()
    commit('createHorsesList', horses)
  }
}

export default actions
