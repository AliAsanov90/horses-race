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
      'isRacePaused'
    ]),

    horseRunInterval () {
      return 300
    }
  },

  watch: {
    isRacePaused (isPaused) {
      if (isPaused) {
        clearInterval(this.intervalId)
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
