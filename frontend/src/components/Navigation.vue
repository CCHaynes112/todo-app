<template>
  <div>
    <v-app-bar color="primary" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Todo App</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link tag="button" to="/">Tasks</router-link>
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
};
</script>

<style scoped>
.theme-toggle {
  margin-top: 20px !important;
  margin-left: 20px;
}
</style>