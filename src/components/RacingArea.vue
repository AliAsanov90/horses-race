<template>
  <div
    v-if="currentRound.horses"
    class="racing-area"
  >
    <div class="racing-area__inner">
      <div
        v-for="(horse, index) in currentRound.horses"
        :key="horse.name"
        class="racing-area__lane"
      >
        <div class="racing-area__lane-number">
          <span>{{ index + 1 }}</span>
        </div>
        <img src="images/horse.svg" width="60" height="60">
      </div>
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

export default {
  name: 'RacingArea',

  computed: {
    ...mapState([
      'currentRound'
    ])
  }
}
</script>
