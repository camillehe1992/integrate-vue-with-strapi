<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
          <td>{{ restaurant.id }}</td>
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant.description }}</td>
          <td>
            <v-btn block text color="deep-purple lighten-2">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    restaurants: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>