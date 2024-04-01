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
        <div v-for="category in allCategories.data" :key="category.id">
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
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCategories: [],
      modifiedData: {
        name: "",
        description: "",
        categories: [],
      },
      restaurants: [],
      error: null,
      headers: {"Content-Type": "application/json"},
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
