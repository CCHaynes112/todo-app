import Vue from 'vue'
import Vuex from 'vuex'

import { TaskClient } from "../api_agent";


Vue.use(Vuex)

const tc = new TaskClient();

export default new Vuex.Store({
  state: {
    tasks: [],
    error: {
      code: "",
      message: "",
    }
  },
  mutations: {
    raiseError(state, error) {
      state.error = error
    },
    dismissError(state) {
      state.error = {};
    },
    getTasks(state, tasks) {
      state.tasks = tasks;
    },
    createTask(state, taskData) {
      state.tasks.push(taskData)
    },
    updateTask(state, taskData) {
      for (var i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === taskData.id) {
          Object.assign(state.tasks[i], taskData);
        }
      }
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
      }).catch((err) => {
        console.log(err)
      })
    },
    createTask(context, taskData) {
      tc.post(taskData).then((res) => {
        context.commit('createTask', res.data.task)
      }).catch((err) => {
        console.log(err)
      })
    },
    updateTask(context, taskData) {
      tc.patch(taskData.id, taskData).then((res) => {
        context.commit('updateTask', res.data.task)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteTask(context, id) {
      tc.delete(id).then(() => {
        context.commit('deleteTask', id)
      }).catch((err) => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
