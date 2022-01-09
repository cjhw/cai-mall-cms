import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IrootState, IStoreType } from './types'

import login from './login/login'
import system from './main/system/system'

const store = createStore<IrootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
