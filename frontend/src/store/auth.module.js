import ApiService from "../common/api.service";
import JwtService from "../common/jwt.service";


const state = {
    isAuthenticated: !!JwtService.getAccessToken(),
    user: {},
}

const mutations = {
    setAuth(state, user) {
        state.isAuthenticated = true;
        state.user = user;
    },
    purgeAuth(state) {
        state.isAuthenticated = false;
        state.user = {};
        JwtService.destroyTokens();
    },
}

const actions = {
    logUserIn(context, credentials) {
        ApiService.post("auth/token", credentials).then((res) => {
            JwtService.saveAccessToken(res.data.access);
            JwtService.saveRefreshToken(res.data.refresh);
            ApiService.setHeader()
            ApiService.query("user").then((res) => {
                context.commit('setAuth', res.data.user)
            })
        })
    },
    logUserOut(context) {
        context.commit('purgeAuth');
    },
    checkAuth(context) {
        if (JwtService.getAccessToken()) {
            ApiService.setHeader()
            ApiService.query("user").then((res) => {
                context.commit('setAuth', res.data.user)
            })
                .catch((err) => {
                    console.log(err)
                    ApiService.post("auth/token/refresh", { "refresh": JwtService.getRefreshToken() }).then((res) => {
                        JwtService.saveAccessToken(res.data.access);
                        ApiService.setHeader()
                        ApiService.query("user").then((res) => {
                            context.commit('setAuth', res.data.user)
                        })
                    })
                })
        }
        else {
            context.commit("purgeAuth");
        }
    }
}

export default {
    state,
    actions,
    mutations,
};
