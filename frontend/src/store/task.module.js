import {TaskService} from "../common/api.service"


const state = {
    tasks: [],
}

const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks;
    },
}

const actions = {
    async getTasks(context) {
        const { data } = await TaskService.query()
        context.commit('setTasks', data)
    },
    async createTask(context, taskData) {
        await TaskService.create(taskData)
        context.dispatch('getTasks')
    },
    async updateTask(context, taskData) {
        await TaskService.update(taskData.id, taskData)
        context.dispatch('getTasks')
    },
    async deleteTask(context, id) {
        await TaskService.delete(id)
        context.dispatch('getTasks')
    },
}

export default {
    state,
    actions,
    mutations,
};
