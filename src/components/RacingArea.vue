<template>
  <div
    v-if="currentRound.horses"
    class="racing-area"
  >
    <div class="racing-area__inner">
      <RacingLane
        v-for="(horse, index) in currentRound.horses"
        :key="horse.id"
        :horse="horse"
        :lane-number="index + 1"
      />
    </div>

    <div class="racing-area__footer">
      <div class="racing-area__round-info">
        <span class="racing-area__round-order">{{ currentRound.order }} Lap</span>
        -
        <span class="racing-area__round-distance">{{ currentRound.distance }}m</span>
      </div>

      <span class="racing-area__finish">Finish</span>
    </div>

    <div
      v-if="programFinished"
      class="racing-area__end-message"
    >
      End of program!
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { ROUNDS_TOTAL_NUM } from '@/constants/rounds.js'
import RacingLane from './RacingLane.vue'

export default {
  name: 'RacingArea',

  components: {
    RacingLane
  },

  computed: {
    ...mapState([
      'currentRound'
    ]),

    ...mapGetters([
      'currentRoundResults'
    ]),

    isRoundFinished () {
      return this.currentRoundResults.every(horse => horse.id)
    },

    notLastRoundFinished () {
      return this.currentRound.order < ROUNDS_TOTAL_NUM && this.isRoundFinished
    },

    programFinished () {
      return this.currentRound.order === ROUNDS_TOTAL_NUM && this.isRoundFinished
    }
  },

  watch: {
    isRoundFinished (isFinished) {
      if (this.notLastRoundFinished) {
        this.goToNextRound()
      }
    },

    programFinished (isFinished) {
      if (isFinished) {
        this.toggleRace()
        this.setProgramEnded()
      }
    }
  },

  methods: {
    ...mapActions([
      'goToNextRound'
    ]),

    ...mapMutations([
      'toggleRace',
      'setProgramEnded'
    ])
  }
}
</script>
