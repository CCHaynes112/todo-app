import TaskService from "../common/api.service"


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
        context.commit('setTasks', data.tasks)
    },
    createTask(context, taskData) {
        TaskService.create(taskData)
        context.dispatch('getTasks')
    },
    updateTask(context, taskData) {
        TaskService.patch(taskData.id, taskData)
        context.dispatch('getTasks')
    },
    deleteTask(context, id) {
        TaskService.delete(id)
        context.dispatch('getTasks')
    },
}

export default {
    state,
    actions,
    mutations,
};
