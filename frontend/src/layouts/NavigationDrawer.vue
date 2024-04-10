<template lang="">
  <v-navigation-drawer permanent>
    <v-list density="compact" nav>
      <v-list-item
        v-for="(route, index) in routes"
        :key="index"
        :prepend-icon="route.icon"
        :title="route.title"
        :value="route.value"
        :to="route.to"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      routes: [
        {icon: "mdi-view-dashboard", title: "Home", value: "home", to: "/home"},
        {icon: "mdi-bookshelf", title: "Book", value: "book", to: "/book"},
        {icon: "mdi-silverware-fork-knife", title: "Restaurant", value: "restaurant", to: "/restaurant"},
        {icon: "mdi-shopping", title: "Shopping", value: "shopping", to: "/shopping"},
        {icon: "mdi-order-bool-descending", title: "Order", value: "order", to: "/order"},
        {icon: "mdi-calendar", title: "Event", value: "event", to: "/event"},
      ],
    };
  },
};
</script>
<style lang=""></style>
