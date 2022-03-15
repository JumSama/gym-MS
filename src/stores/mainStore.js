import { defineStore } from 'pinia'
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    isCollapse: false,
    userInfoList: []
  }),
  getters: {},
  actions: {}
})
