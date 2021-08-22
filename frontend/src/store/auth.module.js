import ApiService from "../common/api.service";
import JwtService from "../common/jwt.service";


const state = {
    isAuthenticated: !!JwtService.getToken(),
    user: {},
}

const mutations = {
    setAuth(state, user) {
        console.log("Setting auth...");
        state.isAuthenticated = true;
        state.user = user;
        JwtService.saveToken(state.user.token);
        console.log("Auth set")
    },
    purgeAuth(state) {
        state.isAuthenticated = false;
        state.user = {};
        JwtService.destroyToken();
    },
}

const actions = {
    logUserIn(context, credentials) {
        ApiService.post("auth/login/", credentials).then((res) => {
            let user = res.data.user
            user.token = res.data.access
            context.commit('setAuth', user)
        })
    },
    logUserOut(context) {
        context.commit('purgeAuth');
    },
    checkAuth(context) {
        ApiService.setHeader();
        console.log("Checking auth...")
        if (JwtService.getToken()) {
            console.log("Have token")
            return ApiService.query("users", { "id": 1 })
                .then((res) => {
                    console.log("Got user: ")
                   console.log(res.data.user)
                    context.commit('setAuth', res.data.user);
                })
        } else {
            console.log("No token, purging auth")
            context.commit('purgeAuth');
        }
    }
}

export default {
    state,
    actions,
    mutations,
};
