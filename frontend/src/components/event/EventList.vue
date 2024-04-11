<template>
  <v-container fluid>
    <v-row v-if="!events.length">
      <v-col>
        <v-alert text="No events found!" type="info" variant="tonal"></v-alert>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="4" v-for="event in events" :event="event" :key="event.id">
        <EventCard :event="event" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from "vuex";
import EventCard from "@/components/event/EventCard.vue";
export default {
  name: "EventsList",
  components: {
    EventCard,
  },
  data() {
    return {};
  },
  computed: mapState({
    events: (state) => state.event.all,
  }),
  created() {
    this.$store.dispatch("event/getAllEvents");
  },
};
</script>
<style lang=""></style>
