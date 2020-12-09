<template>
  <div class="racing-lane">
    <div class="racing-lane__number">
      <span>{{ laneNumber }}</span>
    </div>
    <div class="racing-lane__horse">
      <img
        src="images/horse.svg"
        :style="{ left: `${horse.left}px` }"
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { MAX_HORSE_CONDITION } from '@/constants/horses.js'

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
      intervalId: null
    }
  },

  computed: {
    ...mapState([
      'currentRound',
      'isRacePaused'
    ]),

    horseRunInterval () {
      const speedCorrection = 10 // slow down horse with condition more than 90
      const horseSpeedFactor = (MAX_HORSE_CONDITION - this.horse.condition + speedCorrection) / 100
      return horseSpeedFactor * this.currentRound.distance
    }
  },

  watch: {
    isRacePaused (isPaused) {
      if (isPaused) {
        clearInterval(this.intervalId)
        this.intervalId = null
      } else {
        this.animateHorse()
      }
    }
  },

  methods: {
    ...mapMutations([
      'moveHorse'
    ]),

    animateHorse () {
      this.intervalId = setInterval(() => {
        this.moveHorse(this.horse.id)
      }, this.horseRunInterval)
    }
  }
}
</script>
