<template lang="">
  <v-navigation-drawer floating permanent>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-silverware-fork-knife" title="Restaurant" value="restaurant"></v-list-item>
      <v-list-item prepend-icon="mdi-shopping" title="Shopping" value="shopping"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavigationDrawer",
};
</script>
<style lang=""></style>
