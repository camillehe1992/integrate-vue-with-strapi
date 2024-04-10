<template>
  <v-layout class="rounded rounded-md ma-3">
    <ApplicationBar />
    <NavigationDrawer />
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script>
import ApplicationBar from "@/layouts/ApplicationBar";
import NavigationDrawer from "@/layouts/NavigationDrawer.vue";

export default {
  name: "HomePage",
  components: {
    ApplicationBar,
    NavigationDrawer,
  },
};
</script>
