<template>
  <v-layout class="rounded rounded-md">
    <ApplicationBar />
    <NavigationDrawer />
    <MainContent />
  </v-layout>
</template>

<script>
import ApplicationBar from "@/layouts/ApplicationBar";
import NavigationDrawer from "@/layouts/NavigationDrawer.vue";
import MainContent from "@/layouts/MainContent.vue";

export default {
  name: "App",
  components: {
    ApplicationBar,
    NavigationDrawer,
    MainContent,
  },
};
</script>
