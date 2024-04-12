<template>
  <v-sheet class="fill-height pa-12 bg-grey-lighten-2" rounded>
    <v-card class="mx-auto pa-12 pb-8" elevation="6" max-width="448">
      <v-form v-model="form" @submit.prevent="onSubmit">
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

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a class="text-caption text-decoration-none text-blue" href="/reset-password" rel="noopener noreferrer">
            Forgot login password?</a
          >
        </div>

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
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="/signup" rel="noopener noreferrer">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: false,
      email: null,
      password: null,
      loading: false,
      visible: false,
    };
  },
  methods: {
    async onSubmit(e) {
      if (!this.form) return;
      this.loading = true;
      e.preventDefault();

      const {jwt} = await this.$store.dispatch("auth/login", {
        identifier: this.email,
        password: this.password,
      });
      localStorage.setItem("token", jwt);
      this.loading = false;
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
<style lang=""></style>
