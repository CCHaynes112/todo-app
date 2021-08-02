<template>
  <div>
    <v-app-bar color="primary" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link tag="button" to="/">CHTasks</router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <router-link class="nav-link" tag="button" to="/tasks">Tasks</router-link>

      <router-link class="nav-link" tag="button" to="/signup"
        >Signup</router-link
      >
      <router-link
        v-if="isAuthenticated"
        class="nav-link"
        tag="button"
        @click="logout"
        >Logout</router-link
      >
      <router-link v-else class="nav-link" tag="button" to="/login"
        >Login</router-link
      >
      <v-switch
        class="theme-toggle"
        color="secondary"
        v-model="$vuetify.theme.dark"
      ></v-switch>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    logout() {
      console.log("Logging out");
    },
  },
};
</script>

<style scoped>
.theme-toggle {
  margin-top: 20px !important;
  margin-left: 20px;
}
.nav-link {
  margin: 5px;
}
</style>