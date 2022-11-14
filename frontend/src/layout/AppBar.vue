<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-btn text color="deep-purple" :to="`/`">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        v-for="link in links"
        :key="link"
        text
        color="deep-purple"
        :to="route(link)"
      >
        {{ link }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
    <v-avatar class="mr-10" color="deep-purple" size="32">AB</v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: ["Dashboard", "New Restaurant"],
    };
  },
  methods: {
    route(link) {
      return link.toLowerCase().split(" ").join("-");
    },
  },
};
</script>

<style>
</style>