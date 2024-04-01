<template>
  <v-layout class="rounded rounded-md">
    <ApplicationBar />
    <NavigationDrawer />
    <MainContent />
  </v-layout>
</template>

<script>
import ApplicationBar from "@/views/ApplicationBar";
import NavigationDrawer from "@/views/NavigationDrawer.vue";
import MainContent from "@/views/MainContent.vue";

export default {
  name: "App",
  components: {
    ApplicationBar,
    NavigationDrawer,
    MainContent,
  },
};
</script>
