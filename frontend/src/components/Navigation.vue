<template>
  <div>
    <v-app-bar color="primary" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link tag="button" to="/">CHTasks</router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <p>{{user.username}}</p>
      <div v-if="isAuthenticated">
        <router-link class="nav-link" tag="button" to="/tasks"
          >Tasks</router-link
        >
        <router-link to="#" class="nav-link" tag="button" @click="logout"
          >Logout</router-link
        >
      </div>
      <div v-else>
        <router-link class="nav-link" tag="button" to="/login"
          >Login</router-link
        >
        <router-link class="nav-link" tag="button" to="/register"
          >Register</router-link
        >
      </div>
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
      return this.$store.state.auth.user;
    },
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
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