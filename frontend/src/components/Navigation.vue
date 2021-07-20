<template>
  <div>
    <v-app-bar color="primary" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Todo App</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link tag="button" to="/">Home</router-link>
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
