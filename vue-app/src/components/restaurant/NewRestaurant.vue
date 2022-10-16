<template>
  <v-container>
    <h3>New Restaurant</h3>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:50"
        >
          <v-text-field
            v-model="name"
            :counter="50"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Description"
          rules="required|max:5000"
        >
          <v-text-field
            v-model="description"
            :counter="5000"
            :error-messages="errors"
            label="Description"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="select" rules="required">
          <v-select
            v-model="select"
            :items="categories"
            :error-messages="errors"
            label="Select Categories"
            data-vv-name="select"
            required
            chips
            multiple
          ></v-select>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>
<script>
import { required, digits, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    description: "",
    select: null,
    categories: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.description = "";
      this.select = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style>
</style>