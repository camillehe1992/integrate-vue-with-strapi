<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="3">
          <FilterPanel />
        </v-col>

        <v-col>
          <DisplayPanel />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import FilterPanel from "@/components/FilterPanel.vue";
import DisplayPanel from "@/components/DisplayPanel.vue";
export default {
  components: {
    FilterPanel,
    DisplayPanel,
  },
};
</script>

<style>
</style>