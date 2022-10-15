<template>
  <div id="app">
    <div v-if="error">
      {{ error }}
    </div>

    <form id="form" v-on:submit="handleSubmit" v-else>
      <h3>Restaurants</h3>
      <ul>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.id }}
          {{ restaurant.name }}
          <span v-for="category in restaurant.categories.data" :key="category.id">
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
        <div v-for="category in allCategories" :key="category.id">
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
export default {
  name: "App",
  data() {
    return {
      restaurants: [],
      allCategories: [],
      modifiedData: {
        name: "",
        description: "",
        categories: [],
      },
      error: null,
      headers: { "Content-Type": "application/json" },
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
    extractAttributes: function (resp) {
      return resp.data.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
        };
      });
    },
    handleSubmit: async function (e) {
      e.preventDefault();
      await this.createRestaurant();
      await this.listResaurants();
    },
    createRestaurant: async function () {
      try {
        const response = await fetch("http://localhost:1337/api/restaurants", {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify({ data: this.modifiedData }),
        })
          .then(this.checkStatus)
          .then(this.parseJSON);
        console.log(response);
      } catch (error) {
        this.error = error;
      }
    },
    listResaurants: async function () {
      try {
        const response = await fetch(
          "http://localhost:1337/api/restaurants?populate=*",
          {
            method: "GET",
            headers: this.headers,
          }
        )
          .then(this.checkStatus)
          .then(this.parseJSON)
          .then(this.extractAttributes);
        this.restaurants = response;
      } catch (error) {
        this.error = error;
      }
    },
    listCategories: async function () {
      try {
        const allCategories = await fetch(
          "http://localhost:1337/api/categories",
          {
            method: "GET",
            headers: this.headers,
          }
        )
          .then(this.checkStatus)
          .then(this.parseJSON)
          .then(this.extractAttributes);
        this.allCategories = allCategories;
      } catch (error) {
        this.error = error;
      }
    },
    updateRestaurant: async function (id, payload) {
      fetch(`http://localhost:1337/api/restaurants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
  },
  async mounted() {
    await this.listResaurants();
    await this.listCategories();
  },
};
</script>

