<template>
  <v-app>
    <div>
      <navigation />
      <div class="main-content">
        <router-view> </router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: { Navigation },
  data() {
    return {};
  },
};
</script>


<style>
.main-content {
  margin-top: 20px;
}
</style>
