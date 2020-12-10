<template>
  <div
    v-if="horsesList.length"
    class="horses-list"
  >
    <div class="horses-list__title">
      <h2>Horses List (1-20)</h2>
    </div>

    <v-simple-table
      class="horses-list__table"
      height="720px"
      fixed-header
      dense
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="horse in horsesList"
            :key="horse.id"
          >
            <td>{{ horse.name }}</td>
            <td>{{ horse.color }}</td>
            <td>{{ horse.condition }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HorsesList',

  computed: {
    ...mapState([
      'horsesList'
    ])
  }
}
</script>
