<template>
  <div class="table-container">
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