/**
 * Lugar donde declaro todos los metodos que trabajaran con los datos globales
 */
import * as types from "./mutations_types";

export default {
  [types.CHANGE_MESSAGE](state, newMsg) {
    state.msg = newMsg;
  },

  [types.INCREMENT_COUNTER](state) {
    state.counter++;
  }
};
