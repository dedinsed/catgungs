import { createStore } from 'vuex'

export default createStore({
  state: {
    worker: []
  },
  getters: {
    getAllJob(state){
      return state.worker
    }
  },
  mutations: {
    addJob(state, par){
      state.worker.push(par)
    },
    deleteCatName(state, par){
      state.worker = state.worker.filter(a => a.nickname != par)
    }
  },
  actions: {
  },
  modules: {
  }
})
