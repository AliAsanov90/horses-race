<template>
  <div
    v-if="roundsProgram.length"
    class="program"
  >
    <div class="program__title">
      <h2>Program</h2>
    </div>

    <div class="program__rounds">
      <div
        v-for="round in roundsProgram"
        :key="round.order"
        class="program__round"
      >
        <div class="program__round-info">
          <span class="program__round-info order">{{ round.order }} Lap</span>
          -
          <span class="program__round-info distance">{{ round.distance }}m</span>
        </div>

        <v-simple-table
          class="program__table"
          dense
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Color</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(horse, index) in round.horses"
                :key="horse.id"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ horse.name }}</td>
                <td>{{ horse.color }}</td>
                <td>{{ horse.condition }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Program',

  computed: {
    ...mapState([
      'roundsProgram'
    ])
  }
}
</script>
