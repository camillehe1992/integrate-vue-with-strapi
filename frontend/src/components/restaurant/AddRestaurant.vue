<template>
  <v-card title="Add Restaurant">
    <v-form ref="form" v-model="isValid" class="pa-4 pt-6">
      <v-text-field v-model="modifiedData.name" label="Name*" required></v-text-field>

      <v-textarea v-model="modifiedData.description" label="Description*" variant="filled" required></v-textarea>
      <v-autocomplete
        v-model="modifiedData.categories"
        :items="allCategories"
        item-title="name"
        item-value="id"
        label="Categories"
        auto-select-first
        chips
        multiple
      ></v-autocomplete>
    </v-form>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text="Save" variant="tonal" @click="handleSubmit"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      modifiedData: {
        name: "",
        description: "",
        categories: [],
      },
      isValid: false,
    };
  },
  computed: mapState({
    allCategories: (state) => {
      const categories = state.restaurants.allCategories;
      return categories.map((category) => ({
        id: category.id,
        name: category.attributes.name,
      }));
    },
  }),
  created() {
    this.$store.dispatch("restaurants/getAllCategories");
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();
      this.$store.dispatch("restaurants/createRestaurant", this.modifiedData);
      this.$router.push({path: "/restaurant"});
    },
  },
};
</script>
<style lang=""></style>
