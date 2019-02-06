export default {
  getMessage: function(state) {
    return state.msg.toUpperCase();
  },
  getCounter: function(state) {
    return state.counter;
  }
};
