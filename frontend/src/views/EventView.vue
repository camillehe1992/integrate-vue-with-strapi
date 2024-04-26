<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>Event Example</v-card-title>
      <v-card-subtitle>My Events</v-card-subtitle>
      <v-divider></v-divider>
    </v-card-item>
    <EventList />
  </v-card>
</template>
<script>
import EventList from "@/components/event/EventList.vue";

export default {
  name: "EventView",
  components: {
    EventList,
  },
};
</script>
<style lang=""></style>
