import { defineStore } from 'pinia'
import request from '../request'
import { ElMessage } from 'element-plus'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userScale: 0,
    userList: []
  }),
  getters: {},
  actions: {
    // 获取用户数据
    async getUserList(_page) {
      try {
        const { data } = await request.post({
          url: '/api/user/list',
          data: {
            page: _page.toString(),
            size: '10'
          }
        })
        this.userList = data
      } catch (error) {
        return error
      }
    },

    // 删除用户
    async deleteUser(_index, _id) {
      try {
        const { data } = await request.post({
          url: '/api/user/delete',
          data: {
            id: _id
          }
        })
        if (data) {
          this.userList.splice(_index, 1)
          this.getUserScale()
          ElMessage({
            type: 'success',
            message: '删除成功'
          })
        } else {
          ElMessage({
            type: 'success',
            message: '删除失败'
          })
        }
      } catch (error) {
        ElMessage({
          type: 'success',
          message: error.message
        })
      }
    },

    // 获取规模(长度)
    async getUserScale() {
      const { data } = await request.get({
        url: '/api/user/scale'
      })
      this.userScale = data[0].scale
    }
  }
})