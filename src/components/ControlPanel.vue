<template>
  <div class="control-panel">
    <h1 class="control-panel__title">Horse Racing</h1>
    <div class="control-panel__controls">
      <button class="control-panel__button generate" type="button">Generate program</button>
      <button class="control-panel__button start-pause" type="button">Start / Pause</button>
      <v-btn>button</v-btn>
    </div>
  </div>
</template>

<script>
import { VBtn } from 'vuetify/lib'

export default {
  name: 'ControlPanel',
  components: {
    VBtn
  }
}
</script>
