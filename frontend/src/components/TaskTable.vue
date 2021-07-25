<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Description</th>
          <th class="text-left">Edit</th>
          <th class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.title">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td><v-btn color="secondary" elevation="1">Edit</v-btn></td>
          <td>
            <v-btn color="error" elevation="1" @click="deleteTask(task.id)"
              >Delete</v-btn
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskTable",
  components: {},
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    ...mapActions({
      getTasks: "getTasks",
      deleteTask: "deleteTask",
    }),
  },
};
</script>

<style scoped>
</style>