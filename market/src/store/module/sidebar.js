
const state = {
  drawer: true,
}

const getters = {
  getDrawer: (state) => state.drawer
}

const actions = {
  setDrawer({state}) {
    state.drawer = !state.drawer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
}