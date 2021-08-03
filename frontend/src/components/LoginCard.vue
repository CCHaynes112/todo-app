<template>
  <v-sheet elevation="1" class="login-card">
    <v-form lazy-validation ref="form" v-model="formValid">
      <v-container>
        <v-text-field
          label="Username"
          v-model="username"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          :rules="[rules.required]"
        ></v-text-field>
        <v-col class="text-right pa-0">
          <v-btn @click="submitLogin" color="secondary">Submit</v-btn>
        </v-col>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>

export default {
  name: "LoginCard",
  data() {
    return {
      username: "",
      password: "",
      formValid: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    submitLogin() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$store
        .dispatch("logUserIn", {
          username: this.username,
          password: this.password,
        })
        .then(() => this.$router.push({ name: "Home" }));
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 500px;
}
</style>