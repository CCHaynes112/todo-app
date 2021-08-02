import Vue from 'vue';
import Vuex from 'vuex';
import task from "./task.module";
import auth from "./auth.module";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    task,
  }
});
