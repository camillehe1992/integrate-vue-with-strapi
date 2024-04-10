<template>
  <v-layout class="rounded rounded-md">
    <ApplicationBar />
    <NavigationDrawer />
    <v-main class="bg-grey-lighten-3">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script>
import ApplicationBar from "@/layouts/ApplicationBar";
import NavigationDrawer from "@/layouts/NavigationDrawer.vue";

export default {
  name: "HomeView",
  components: {
    ApplicationBar,
    NavigationDrawer,
  },
};
</script>
