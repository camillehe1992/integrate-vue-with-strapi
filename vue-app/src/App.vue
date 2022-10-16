<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app padless>
      <v-col class="text-center deep-purple" cols="12">
        {{ new Date().getFullYear() }} — <strong>Camille1992</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "@/layout/AppBar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>
<style>
</style>