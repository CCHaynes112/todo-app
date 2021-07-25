import Vue from 'vue'
import Vuex from 'vuex'

import { TaskClient } from "../api_agent";


Vue.use(Vuex)

const tc = new TaskClient();

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    getTasks(state, tasks) {
      state.tasks = tasks;
    },
    createTask(state, taskData) {
      console.log(taskData);
      state.tasks.push()
    },
    deleteTask(state, id) {
      for (var i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === id) {
          state.tasks.splice(i, 1);
        }
      }
    }
  },
  actions: {
    getTasks(context) {
      tc.get().then((res) => {
        context.commit('getTasks', res.data.tasks)
      })
    },
    createTask(context, taskData) {
      console.log(taskData);
      // Post request to create task
      context.dispatch('getTasks');
    },
    updateTask(context, taskData) {
      console.log(taskData);
      // Post/Patch? request to update task
      context.dispatch('getTasks');
    },
    deleteTask(context, id) {
      tc.delete(id).then(() => {
        context.commit('deleteTask', id)
      })
      context.dispatch('getTasks');
    },
  },
  modules: {
  }
})
