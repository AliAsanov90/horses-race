import { HORSES_TOTAL_NUM } from '@/constants/horses.js'
import { ROUNDS_TOTAL_NUM, RACE_DISTANCES_METERS, HORSES_PER_ROUND } from '@/constants/rounds.js'
import { idMaker, getRandomNumber, getRandomHorseName, getRandomHorseColor, getRandomHorseCondition } from '@/utils/helpers.js'

const getRandomHorses = (horsesNum, totalHorsesList) => {
  const randomHorses = []

  totalHorsesList.forEach((horse, i, arr) => {
    const randomHorse = arr[getRandomNumber(arr.length)]

    if (randomHorses.indexOf(randomHorse) === -1 && randomHorses.length < horsesNum) {
      randomHorses.push(randomHorse)
    }
  })
  return randomHorses
}

const createHorsesList = () => {
  const horses = []
  const getHorseId = idMaker()

  for (let i = 0; i < HORSES_TOTAL_NUM; i++) {
    const horseId = getHorseId.next().value
    const horseName = getRandomHorseName()
    const horseColor = getRandomHorseColor()
    const horseCondition = getRandomHorseCondition()

    const horse = {
      id: horseId,
      name: horseName,
      color: horseColor,
      condition: horseCondition,
      left: 0
    }
    horses.push(horse)
  }
  return horses
}

const createRounds = (totalHorsesList, isResultsRounds = false) => {
  const rounds = []
  const getRoundOrder = idMaker()

  for (let i = 0; i < ROUNDS_TOTAL_NUM; i++) {
    const roundOrder = getRoundOrder.next().value
    const roundDistance = RACE_DISTANCES_METERS[roundOrder - 1]
    const roundHorses = isResultsRounds
      ? Array(HORSES_PER_ROUND).fill({ id: null, name: '', color: '', condition: null })
      : getRandomHorses(HORSES_PER_ROUND, totalHorsesList)

    const round = {
      order: roundOrder,
      distance: roundDistance,
      horses: roundHorses
    }
    rounds.push(round)
  }
  return rounds
}

const actions = {
  generate ({ commit, state }) {
    const horses = createHorsesList()
    commit('createHorsesList', horses)

    const { horsesList } = state

    const roundsProgram = createRounds(horsesList)
    commit('createRoundsProgram', roundsProgram)

    const roundsResults = createRounds(horsesList, true)
    commit('createRoundsResults', roundsResults)

    const currentRound = roundsProgram[0]
    commit('setCurrentRound', currentRound)
  },

  addHorseResult ({ commit, state }, horseId) {
    const horseFinished = state.horsesList.find(horse => horse.id === horseId)
    commit('addHorseResult', horseFinished)
  }
}

export default actions
