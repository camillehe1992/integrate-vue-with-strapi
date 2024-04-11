<template>
  <v-sheet class="fill-height pa-12 bg-grey-lighten-2" rounded>
    <v-card class="mx-auto pa-12 pb-8" elevation="6" max-width="448">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <div class="text-subtitle-1 text-medium-emphasis">First Name</div>
        <v-text-field
          v-model="firstname"
          :readonly="loading"
          :rules="[required]"
          placeholder="First Name"
          variant="outlined"
          color="info"
          clearable
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">Last Name</div>
        <v-text-field
          v-model="lastname"
          :readonly="loading"
          :rules="[required]"
          placeholder="Last Name"
          variant="outlined"
          color="info"
          clearable
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          color="info"
          clearable
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Password</div>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          color="info"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn :disabled="!form" :loading="loading" color="info" size="large" type="submit" variant="elevated" block>
          Sign Up
        </v-btn>

        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="/login" rel="noopener noreferrer">
            Login now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  name: "SignupPage",
  data() {
    return {
      form: false,
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      loading: false,
      visible: false,
    };
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
<style lang=""></style>
