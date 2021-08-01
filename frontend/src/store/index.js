import Vue from 'vue'
import Vuex from 'vuex'

import { AuthenticationClient, TaskClient } from "../api_agent";


Vue.use(Vuex)

const authClient = new AuthenticationClient();
const taskClient = new TaskClient();

export default new Vuex.Store({
  state: {
    auth: {
      "access_token": null,
      "refresh_token": null,
    },
    user: {},
    tasks: [],
    error: {
      code: "",
      message: "",
    }
  },
  mutations: {
    logUserIn(state, data) {
      console.log(data)
      state.user = data.user;
      state.auth.access_token = data.access
      state.auth.refresh_token = data.refresh
    },
    logUserOut(state) {
      state.user = null;
    },
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
    logUserIn(context, userData) {
      authClient.login(userData).then((res) => {
        context.commit('logUserIn', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    logUserOut(context) {
      authClient.logout().then(() => {
        context.commit('logUserOut')
      }).catch((err) => {
        console.log(err)
      })
    },
    getTasks(context) {
      taskClient.get().then((res) => {
        context.commit('getTasks', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    createTask(context, taskData) {
      taskClient.post(taskData).then((res) => {
        context.commit('createTask', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    updateTask(context, taskData) {
      taskClient.patch(taskData.id, taskData).then((res) => {
        context.commit('updateTask', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteTask(context, id) {
      taskClient.delete(id).then(() => {
        context.commit('deleteTask', id)
      }).catch((err) => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
