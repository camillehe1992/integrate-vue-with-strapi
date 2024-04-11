<template>
  <v-card>
    <v-container v-if="event">
      <v-row>
        <v-col>
          <v-btn to="/event" icon="mdi-arrow-left" color="primary" variant="tonal"> </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-h6 font-weight-bold">{{ event.name }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-icon color="info" icon="mdi-clock"></v-icon>
          <span class="text-subtitle-1 font-weight-bold ma-2">Date & Time</span>
          <br />
          <span class="text-body-2 ma-2">{{ event.date }}</span>
          <span class="text-body-2 ma-2">{{ event.time }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-icon color="info" icon="mdi-map-marker"></v-icon>
          <span class="text-subtitle-1 font-weight-bold">Location</span>
          <br />
          <span class="ma-2 text-body-2">{{ event.location }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="text-subtitle-1 font-weight-bold">Description</span>
          <br />
          <span class="text-body-2">{{ event.description }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="text-subtitle-1 font-weight-bold">Category</span>
          <br />
          <span class="text-body-2">{{ event.category }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "SingleEvent",
  data() {
    return {
      event: null,
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("event", {
      getEventById: "getEventById",
    }),
  },
  async created() {
    await this.$store.dispatch("event/getAllEvents");
    this.event = this.getEventById(this.id);
  },
};
</script>
