import { defineStore } from 'pinia'
export const useMainStore = defineStore({
  id: 'auth',
  state: () => ({
    isCollapse: false,
    userInfoList: []
  }),
  getters: {},
  actions: {}
})
