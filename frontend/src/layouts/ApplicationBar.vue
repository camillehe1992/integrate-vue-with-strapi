<template lang="">
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title><strong>Vue & Strapi Playground</strong></v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn class="text-none text-subtitle-1" to="/"> Home </v-btn>
    <v-btn class="text-none text-subtitle-1" to="/login"> Log In </v-btn>
    <v-btn class="text-none text-subtitle-1" to="/signup"> Sign Up </v-btn>
    <v-btn class="text-none text-subtitle-1" to="/about"> About </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "ApplicationBar",
};
</script>
<style lang=""></style>
