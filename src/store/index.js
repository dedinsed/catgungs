import { createStore } from 'vuex'

export default createStore({
  state: {
    worker: []
  },
  getters: {
    getAllWorker(state){
      return state.worker
    }
  },
  mutations: {
    addJob(state, par){
      state.worker.push(par)
    }
  },
  actions: {
  },
  modules: {
  }
})
