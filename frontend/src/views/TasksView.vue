<template>
  <div class="table-container">
    <v-btn color="primary" elevation="2">Create Task</v-btn>
    <task-table />
  </div>
</template>

<script>
import TaskTable from "../components/TaskTable.vue";

export default {
  name: "TasksView",
  components: { TaskTable },
  data() {
    return {};
  },
};
</script>

<style scoped>
.table-container {
  width: 75%;
  margin: auto;
}
</style>