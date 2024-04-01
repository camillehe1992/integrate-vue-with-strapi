<template lang="">
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="restaurant in restaurants.data" :key="restaurant.id">
        {{ restaurant.attributes.name }}
        <br />
        {{ restaurant.attributes.description }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      error: null,
    };
  },
  methods: {
    parseJSON: function (resp) {
      return resp.json ? resp.json() : resp;
    },
    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    },

    handleSubmit: async function (e) {
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:1337/api/restaurants", {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify({data: this.modifiedData}),
        })
          .then(this.checkStatus)
          .then(this.parseJSON);
        console.log(response);
      } catch (error) {
        this.error = error;
      }
    },
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:1337/api/restaurants?populate=*", {
        method: "GET",
        headers: this.headers,
      })
        .then(this.checkStatus)
        .then(this.parseJSON);
      this.restaurants = response;
    } catch (error) {
      this.error = error;
    }

    try {
      const allCategories = await fetch("http://localhost:1337/api/categories", {
        method: "GET",
        headers: this.headers,
      })
        .then(this.checkStatus)
        .then(this.parseJSON);
      this.allCategories = allCategories;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
<style lang=""></style>
