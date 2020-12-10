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
import { MAX_HORSE_CONDITION, TOTAL_HORSE_STEPS } from '@/constants/horses.js'

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
      horseFinished: false
    }
  },

  computed: {
    ...mapState([
      'currentRound',
      'isRacePaused'
    ]),

    horseRunInterval () {
      const speedCorrection = 10 // for slowing down the horse with condition more than 90
      const horseSpeedFactor = (MAX_HORSE_CONDITION - this.horse.condition + speedCorrection) / 100
      return horseSpeedFactor * this.currentRound.distance
    }
  },

  watch: {
    isRacePaused (isPaused) {
      if (isPaused) {
        this.removeInterval()
      } else {
        this.animateHorse()
      }
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
        const horseStep = this.calculateHorseStepPx()
        const finishLeft = this.getFinishLeftPx()

        if (this.horse.left >= finishLeft) {
          if (this.horseFinished) return

          this.horseFinished = true
          this.removeInterval()
          this.addHorseResult(this.horse.id)
        } else {
          this.moveHorse({ horseId: this.horse.id, horseStep })
        }
      }, this.horseRunInterval)
    }
  }
}
</script>
