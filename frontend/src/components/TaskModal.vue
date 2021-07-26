<template>
  <div class="text-center">
    <v-dialog :value="true" @click:outside="$emit('close')" width="700">
      <v-form lazy-validation ref="form" v-model="formValid">
        <v-card>
          <v-card-title>
            {{ action }} Task
          </v-card-title>
          <div class="modal-body">
            <v-text-field
              placeholder="Title"
              :rules="[rules.required]"
              required
              v-model="title"
              label="Title"
            ></v-text-field>
            <v-textarea
              placeholder="Description"
              :rules="[rules.required]"
              required
              v-model="description"
              label="Description"
            ></v-textarea>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text @click="submitTask">
              {{ action }} task
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskModal",
  components: {},
  props: {
    action: String,
    task: Object,
  },
  data() {
    return {
      title: this.task.title,
      description: this.task.description,
      formValid: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    ...mapActions({
      updateTask: "updateTask",
      createTask: "createTask",
    }),
    submitTask() {
      if (!this.$refs.form.validate()) {
        return;
      }
      if (this.action === "Edit") {
        // Check if each attribute is the same, and if it isn't, add to new obj
        let newTask = {};
        if (this.title != this.task.title) {
          newTask.title = this.title;
        }
        if (this.description != this.task.description) {
          newTask.description = this.description;
        }
        if (Object.keys(newTask).length != 0) {
          // Is not empty obj
          newTask.id = this.task.id;
          this.updateTask(newTask);
        }
      } else {
        this.createTask({
          title: this.title,
          description: this.description,
        });
      }
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-body {
  padding: 20px;
}
</style>