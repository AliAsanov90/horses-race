<template>
  <div class="app">
    <ControlPanel />

    <div class="app__main">
      <HorseList />
      <RacingArea />
      <Program />
      <Results />
    </div>
  </div>
</template>

<script>
import ControlPanel from '@/components/ControlPanel.vue'
import HorseList from '@/components/HorseList.vue'
import RacingArea from '@/components/RacingArea.vue'
import Program from '@/components/Program.vue'
import Results from '@/components/Results.vue'

export default {
  name: 'App',

  components: {
    ControlPanel,
    HorseList,
    RacingArea,
    Program,
    Results
  }
}
</script>
