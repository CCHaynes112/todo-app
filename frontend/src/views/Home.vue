<template>
  <v-simple-table class="task-table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.title">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      tasks: [],
      reveal: false,
    };
  },
  async mounted() {
    const {data} = await axios.get('/api/v1/todos');
    this.tasks = data.tasks;
  },
  methods: {
    getTodos() {
      return [
        {
          title: "Todo 1",
          description: "Description for todo 1",
        },
        {
          title: "Todo 2",
          description: "Description for todo 2",
        },
        {
          title: "Todo 3",
          description: "Description for todo 3",
        },
      ];
    },
  },
};
</script>

<style scoped>
.task-table {
  width: 75%;
  margin: auto;
}
</style>