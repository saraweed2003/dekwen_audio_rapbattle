import { createStore } from 'vuex';
import { DekwenAPI } from "../api/dekwenAPI";

export default createStore({
  state: {
    forms: [],
  },
  mutations: {
    SET_FORM(state, forms) {
        state.forms = forms;
    }
  },
  actions: {
   fetchForm({ commit }) {
      DekwenAPI.get("/registerations").then((response) => {
        commit("SET_FORM", response.data);
        console.log("API", response.data);
      });
    },

  },
  getters: {
    getForm(state) {
      return state.forms;
    },

  },
});
