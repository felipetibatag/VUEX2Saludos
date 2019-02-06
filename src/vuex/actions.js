import { INCREMENT_COUNTER, CHANGE_MESSAGE } from "./mutations_types"; //carga los nombres de los metodos disponibles globalmente

export default {
  changeMessage: ({ commit }, msg) => {
    console.log("Entrando a changeMessage " + msg);
    commit(CHANGE_MESSAGE, msg);
  },

  incrementCounter: ({ commit }) => {
    commit(INCREMENT_COUNTER);
  }
};
