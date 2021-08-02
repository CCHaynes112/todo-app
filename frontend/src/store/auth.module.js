import ApiService from "../common/api.service";
import JwtService from "../common/jwt.service";


const state = {
    isAuthenticated: false,
    user: {},
}

const mutations = {
    setAuth(state, user) {
        state.isAuthenticated = true;
        state.user = user;
        JwtService.saveToken(state.user.token);
    },
    purgeAuth(state) {
        state.isAuthenticated = false;
        state.user = {};
        JwtService.destroyToken();
    },
}

const actions = {
    logUserIn(context, credentials) {
        ApiService.login(credentials).then((res) => {
            context.commit('setAuth', res.user)
        })
    },
    logUserOut(context) {
        context.commit('purgeAuth');
    },
    checkAuth(context) {
        console.log("Checking auth...")
        if (!JwtService.getToken()) {
            context.commit('purgeAuth');
        }
    }
}

export default {
    state,
    actions,
    mutations,
};
