<template>
  <div class="horse-list">
    <div class="horse-list__title">
      <h2>Horse List (1-20)</h2>
    </div>
    <v-simple-table
      class="horse-list__table"
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
            v-for="horse in horseList"
            :key="horse.name"
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
  name: 'HorseList',

  computed: {
    ...mapState([
      'horseList'
    ])
  }
}
</script>
