import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const lightTheme = {
    primary: "#4CAF50",
    secondary: "#504CAF",
    accent: "#AF504C",
    error: "#E91E63",
    warning: "#ffeb3b",
    info: "#607d8b",
    success: "#4caf50"
}

const darkTheme = {
    primary: "#4CAF50",
    secondary: "#504CAF",
    accent: "#AF504C",
    error: "#E91E63",
    warning: "#ffeb3b",
    info: "#607d8b",
    success: "#4caf50"
}

export default new Vuetify({
    theme: {
        options: {
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
        },
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
    },
});
