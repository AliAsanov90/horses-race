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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RacingLane from './RacingLane.vue'

export default {
  name: 'RacingArea',

  components: {
    RacingLane
  },

  computed: {
    ...mapState([
      'currentRound'
    ])
  }
}
</script>
