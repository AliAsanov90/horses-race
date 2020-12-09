<template>
  <div class="horse-list">
    <div class="horse-list__title">Horse List (1-20)</div>
    <table class="horse-list__table" cellspacing="20px">
      <thead class="horse-list__table-head">
        <tr>
          <th>Name</th>
          <th>Condition</th>
          <th>Color</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>Adam Loverace</td>
        <td>80</td>
        <td>red</td>
      </tr>
      <tr>
        <td>Adam Loverace</td>
        <td>80</td>
        <td>red</td>
      </tr>
      <tr>
        <td>Adam Loverace</td>
        <td>80</td>
        <td>red</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HorseList'
}
</script>
