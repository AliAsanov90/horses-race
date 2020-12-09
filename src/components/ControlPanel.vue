<template>
  <div class="control-panel">
    <h1 class="control-panel__title">Horse Racing</h1>
    <div class="control-panel__controls">
      <button
        class="control-panel__button generate"
        type="button"
        @click="gen"
      >
        Generate program
      </button>
      <button
        class="control-panel__button start-pause"
        type="button"
        :disabled="!currentRound.horses"
        @click="toggle"
      >
        Start / Pause
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ControlPanel',

  computed: {
    ...mapState([
      'currentRound'
    ])
  },

  methods: {
    ...mapActions([
      'generate'
    ]),

    ...mapMutations([
      'toggleRace'
    ]),

    gen () {
      this.generate()
    },

    toggle () {
      this.toggleRace()
    }
  }
}
</script>
