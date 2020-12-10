const getters = {
  currentRoundResults (state) {
    if (!state.roundsResults[state.currentRoundOrder - 1]) return []

    return state
      .roundsResults[state.currentRoundOrder - 1]
      .horses
  }
}

export default getters
