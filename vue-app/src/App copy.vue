<template>
  <div id="app">
    <form id="form" v-on:submit="handleSubmit">
      <h3>Restaurants</h3>
      <ul>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.id }}
          {{ restaurant.name }}
          <span
            v-for="category in restaurant.categories.data"
            :key="category.id"
          >
            {{ category.attributes.name }}
          </span>
        </li>
      </ul>
      <br />

      <label for="name">Name</label>
      <input id="name" v-model="modifiedData.name" type="text" name="name" />

      <label for="description">Description</label>
      <input
        id="description"
        v-model="modifiedData.description"
        type="text"
        name="description"
      />
      <div>
        <br />
        <b>Select categories</b>
        <br />
        <div v-for="category in categories" :key="category.id">
          <label>{{ category.name }}</label>
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
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      modifiedData: {
        name: "",
        description: "",
        categories: [],
      },
    };
  },
  computed: {
    ...mapState({
      restaurants: (state) => state.restaurants.all,
      categories: (state) => state.categories.all,
    }),
  },
  methods: {
    ...mapActions("restaurants", [
      "listRestaurants",
      "createRestaurant",
      "updateRestaurant",
    ]),
    ...mapActions("categories", ["listCategories"]),
    handleSubmit: async function (e) {
      e.preventDefault();
      await this.createRestaurant(this.modifiedData);
    },
  },
  async mounted() {
    await this.listRestaurants();
    await this.listCategories();
  },
};
</script>

