<template>
  <div class="racing-lane">
    <div class="racing-lane__number">
      <span>{{ laneNumber }}</span>
    </div>

    <div
      class="racing-lane__lane"
      ref="racingLane"
    >
      <img
        src="images/horse.svg"
        :style="{ left: `${horse.left}px` }"
        ref="racingHorse"
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { MAX_HORSE_CONDITION, TOTAL_HORSE_STEPS, HORSE_SPEED_FACTOR } from '@/constants/horses.js'

export default {
  name: 'RacingLane',

  props: {
    horse: {
      type: Object,
      required: true
    },

    laneNumber: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      intervalId: null,
      horseFinishedRound: false
    }
  },

  computed: {
    ...mapState([
      'currentRound',
      'isRacePaused'
    ]),

    horseRunInterval () {
      const speedCorrection = 10 // for slowing down the horse with condition more than 90
      const speedFactor = (MAX_HORSE_CONDITION - this.horse.condition + speedCorrection) / HORSE_SPEED_FACTOR
      return Math.round(speedFactor * this.currentRound.distance)
    }
  },

  watch: {
    isRacePaused (isPaused) {
      if (isPaused) {
        this.removeInterval()
      } else {
        this.animateHorse()
      }
    },

    'horse.left' (left) {
      if (left === 0) {
        this.horseFinishedRound = false
      }
    },

    currentRound: {
      handler (round) {
        if (!this.isRacePaused && round.order > 1) {
          this.animateHorse()
        }
      },
      immediate: true
    }
  },

  methods: {
    ...mapActions([
      'addHorseResult'
    ]),

    ...mapMutations([
      'moveHorse'
    ]),

    removeInterval () {
      clearInterval(this.intervalId)
      this.intervalId = null
    },

    calculateHorseStepPx () {
      const laneLength = this.$refs.racingLane.clientWidth
      return Math.round(laneLength / TOTAL_HORSE_STEPS)
    },

    getFinishLeftPx () {
      const laneLength = this.$refs.racingLane.clientWidth
      const horseWidth = this.$refs.racingHorse.clientWidth
      const remainder = (laneLength - horseWidth) % this.calculateHorseStepPx()

      return (laneLength - horseWidth) - remainder
    },

    animateHorse () {
      this.intervalId = setInterval(() => {
        const finishLeft = this.getFinishLeftPx()

        if (this.horse.left >= finishLeft) {
          if (this.horseFinishedRound) return

          this.horseFinishedRound = true
          this.removeInterval()
          this.addHorseResult(this.horse.id)
        } else {
          const horseStep = this.calculateHorseStepPx()
          this.moveHorse({ horseId: this.horse.id, horseStep })
        }
      }, this.horseRunInterval)
    }
  }
}
</script>
