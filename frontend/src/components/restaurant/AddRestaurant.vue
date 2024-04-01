<template lang="">
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <form id="form" v-on:submit="handleSubmit" v-else>
      <h2>Add Restaurant</h2>
      <br />

      <label for="name">Name</label>
      <input required id="name" v-model="modifiedData.name" type="text" name="name" />

      <label for="description">Description</label>
      <input required id="description" v-model="modifiedData.description" type="text" name="description" />
      <div>
        <br />
        <b>Select categories</b>
        <br />
        <div v-for="category in allCategories" :key="category.id">
          <label>{{ category.attributes.name }}</label>
          <input
            type="checkbox"
            :value="category.id"
            v-model="modifiedData.categories"
            name="categories"
            :id="category.id"
          />
        </div>
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
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
      error: null,
    };
  },
  computed: mapState({
    allCategories: (state) => state.restaurants.allCategories,
  }),
  created() {
    this.$store.dispatch("restaurants/getAllCategories");
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();
      this.$store.dispatch("restaurants/createRestaurant", this.modifiedData);
    },
  },
};
</script>
<style lang=""></style>
