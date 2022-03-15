import { defineStore } from 'pinia'
import request from '../request'
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    isCollapse: false
  }),
  getters: {},
  actions: {
    // 删除用户
    async deleteUser(_url, _id) {
      const { data } = await request.post({
        url: _url,
        data: {
          id: _id
        }
      })
      return data.affectedRows > 0
    }
  }
})
