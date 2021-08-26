<template>
  <v-sheet elevation="1" class="taskTable">
    <v-btn color="secondary" elevation="2" @click="openModal('Create')"
      >Create Task</v-btn
    >
    <task-modal
      :task="selectedTask"
      :action="taskAction"
      v-if="showModal"
      @close="showModal = false"
    />
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
          <tr v-for="task in tasks" :key="task.id">
            <td class="title-column">
              {{ task.title }}
            </td>
            <td class="description-column">
              {{ task.description }}
            </td>
            <td class="edit-column">
              <v-btn
                color="secondary"
                elevation="1"
                icon
                @click="openModal('Edit', task)"
                ><v-icon dark> mdi-pencil-outline</v-icon></v-btn
              >
            </td>
            <td class="delete-column">
              <v-btn
                color="error"
                elevation="1"
                icon
                @click="deleteTask(task.id)"
                ><v-icon dark> mdi-delete</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import TaskModal from "./TaskModal.vue";

export default {
  name: "TaskTable",
  components: { TaskModal },
  data() {
    return {
      showModal: false,
      taskAction: "",
      selectedTask: {},
    };
  },
  computed: {
    tasks() {
      return this.$store.state.task.tasks;
    },
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    ...mapActions({
      getTasks: "getTasks",
      updateTask: "updateTask",
      deleteTask: "deleteTask",
    }),
    openModal(action, task) {
      this.showModal = true;
      this.taskAction = action;
      this.selectedTask = { ...task };
    },
  },
};
</script>

<style scoped>
.taskTable {
  padding: 20px;
}
.title-column {
  width: 34%;
}
.description-column {
  width: 60%;
}
.edit-column {
  width: 3%;
}
.delete-column {
  width: 3%;
}
</style>