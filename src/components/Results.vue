<template>
  <div
    v-if="roundsResults.length"
    class="results"
  >
    <div class="results__title">
      <h2>Results</h2>
    </div>

    <div class="results__rounds">
      <div
        v-for="round in roundsResults"
        :key="round.order"
        class="results__round"
      >
        <div class="results__round-info">
          <span class="results__round-info order">{{ round.order }} Lap</span>
          -
          <span class="results__round-info distance">{{ round.distance }}m</span>
        </div>

        <v-simple-table
          class="results__table"
          dense
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Color</th>
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
  name: 'Results',

  computed: {
    ...mapState([
      'roundsResults'
    ])
  }
}
</script>
