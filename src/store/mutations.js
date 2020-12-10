const mutations = {
  createHorsesList (state, horsesList) {
    state.horsesList = horsesList
  },

  createRoundsProgram (state, roundsProgram) {
    state.roundsProgram = roundsProgram
  },

  createRoundsResults (state, roundsResults) {
    state.roundsResults = roundsResults
  },

  setCurrentRound (state, currentRound) {
    state.currentRound = currentRound
  },

  toggleRace (state) {
    if (!state.currentRound.horses) return
    state.isRacePaused = !state.isRacePaused
  },

  setProgramEnded (state, ended = true) {
    state.programEnded = ended
  },

  moveHorse (state, { horseId, horseStep }) {
    const horse = state.currentRound.horses.find(horse => horse.id === horseId)
    horse.left += horseStep
  },

  addHorseResult (state, horse) {
    const currentRoundResults = state.roundsResults[state.currentRoundOrder - 1].horses
    const nextEmptyResultIndex = currentRoundResults.findIndex(result => !result.name)

    currentRoundResults.splice(nextEmptyResultIndex, 1, horse)
  },

  setCurrentRoundOrder (state, { maxRoundsNum, initialRound }) {
    if (initialRound) {
      state.currentRoundOrder = initialRound
    } else if (state.currentRoundOrder < maxRoundsNum) {
      state.currentRoundOrder++
    }
  },

  resetHorsesLeft (state) {
    state.currentRound.horses = state.currentRound.horses.map(horse => {
      return { ...horse, left: 0 }
    })
  }
}

export default mutations
