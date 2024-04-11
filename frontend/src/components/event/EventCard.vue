<template lang="">
  <v-card color="secondary" class="mx-auto">
    <v-card-item>
      <v-card-title class="text-h6 mb-1"> {{ event.name }}</v-card-title>
    </v-card-item>
    <v-card-text>
      <div class="d-flex">
        <div>
          <v-icon icon="mdi-clock"></v-icon>
          <span class="ma-2">{{ event.date }}</span>
        </div>
        <div>
          <v-icon icon="mdi-map-marker"></v-icon>
          <span class="ma-2">{{ event.location }}</span>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <router-link :to="'/event/' + event.id">
        <v-btn variant="text"> More </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
<style lang=""></style>
