<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar flat color="deep-purple accent-4" dark>
      <v-toolbar-title>Filter results</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h3>Choose Categories</h3>

      <v-chip-group v-model="seletedCategories" column multiple>
        <v-chip
          v-for="category in categories"
          :key="category.id"
          label
          filter
          outlined
        >
          {{ category.name }}
        </v-chip>
      </v-chip-group>
      <v-divider class="my-2"></v-divider>
    </v-card-text>
    <v-card-actions>
      <v-btn block text color="deep-purple lighten-2"> Reset </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      seletedCategories: [],
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.all,
    }),
  },
  methods: {
    ...mapActions("categories", ["listCategories"]),
  },
  async mounted() {
    await this.listCategories();
  },
};
</script>

<style>
</style>