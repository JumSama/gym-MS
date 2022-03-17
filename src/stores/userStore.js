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
    },

    // 创建用户角色
    async createRole(id, role) {
      try {
        await request.post({
          url: '/api/user/createRole',
          data: {
            id: id,
            role: role
          }
        })
      } catch (error) {
        ElMessage.error(error.message)
      }
    },

    // 创建用户
    async createUser(userInfo) {
      try {
        const result = await request.post({
          url: '/api/user/create',
          data: {
            userInfo
          }
        })
        // 判断请求状态
        if (result.status == 202) {
          throw new Error(result.data)
        } else if (result.status == 200) {
          return result.data
        }
      } catch (error) {
        ElMessage.error(error.message)
      }
    },

    async searchUser(key) {
      try {
        const { data } = await request.post({
          url: '/api/user/search',
          data: {
            key: key
          }
        })
        this.userList = data
        ElMessage.success('查询成功!')
      } catch (error) {
        ElMessage.error(error.message)
      }
    }
  }
})
