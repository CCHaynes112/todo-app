<template>
  <login-card />
</template>

<script>
import LoginCard from "../components/LoginCard.vue";

export default {
  components: { LoginCard },
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style scoped>
.login-card {
  margin: auto;
}
</style>