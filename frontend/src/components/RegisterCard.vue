<template>
  <v-sheet elevation="1" class="register-card">
    <v-form lazy-validation ref="form" v-model="formValid">
      <v-container>
        <v-text-field
          label="Username"
          v-model="username"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="email"
          type="email"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          :rules="[rules.required]"
        ></v-text-field>
        <v-col class="text-right pa-0">
          <v-btn @click="submitRegister" color="secondary">Submit</v-btn>
        </v-col>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "RegisterCard",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      formValid: false,
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    submitRegister() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$store
        .dispatch("registerUser", {
          username: this.username,
          password: this.password,
          email: this.email,
        })
        .then(() => this.$router.push({ name: "Home" }));
    },
  },
};
</script>

<style scoped>
.register-card {
  width: 500px;
}
</style>