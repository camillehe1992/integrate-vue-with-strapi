<template lang="">
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.attributes.name }}
        <br />
        {{ restaurant.attributes.description }}
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      error: null,
    };
  },
  computed: mapState({
    restaurants: (state) => state.restaurants.all,
  }),
  created() {
    this.$store.dispatch("restaurants/getAllRestaurants");
  },
};
</script>
<style lang=""></style>
