import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IrootState, IStoreType } from './types'

import { getPageListData } from '@/service/main/system/system'

import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'

const store = createStore<IrootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18,
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  mutations: {
    changeEntireRoles(state, entireRoles) {
      state.entireRoles = entireRoles
    },
    changeEntireDepartments(state, entireDepartments) {
      state.entireDepartments = entireDepartments
    },
    changeEntireMenus(state, entireMenus) {
      state.entireMenus = entireMenus
    }
  },
  getters: {},
  actions: {
    async getInitalDataAction({ commit }) {
      const departmentResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const { list: entireRoles } = departmentResult.data

      const roleResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: entireDepartments } = roleResult.data

      const menuResult = await getPageListData('/menu/list', {})
      const { list: entireMenus } = menuResult.data

      commit('changeEntireRoles', entireRoles)
      commit('changeEntireDepartments', entireDepartments)
      commit('changeEntireMenus', entireMenus)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitalDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
