<template>
  <v-app id="inspire">
    <AppBar />
    <Main />
  </v-app>
</template>

<script>
import AppBar from "@/layout/AppBar.vue";
import Main from "@/layout/Main.vue";
export default {
  components: {
    AppBar,
    Main,
  },
};
</script>
<style>
</style>