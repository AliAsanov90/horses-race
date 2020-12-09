<template>
  <div class="app">
    <ControlPanel />

    <div class="app__main">
      <HorsesList />
      <RacingArea />
      <Program />
      <Results />
    </div>
  </div>
</template>

<script>
import ControlPanel from '@/components/ControlPanel.vue'
import HorsesList from '@/components/HorsesList.vue'
import RacingArea from '@/components/RacingArea.vue'
import Program from '@/components/Program.vue'
import Results from '@/components/Results.vue'

export default {
  name: 'App',

  components: {
    ControlPanel,
    HorsesList,
    RacingArea,
    Program,
    Results
  }
}
</script>
