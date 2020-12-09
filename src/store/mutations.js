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

  moveHorse (state, horseId) {
    const horse = state.currentRound.horses.find(horse => horse.id === horseId)
    horse.left += 3 // add 3px per interval
  }
}

export default mutations
