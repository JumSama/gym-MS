<template>
  <el-table
    :data="userData"
    @select="selected"
    @select-all="allSelected"
    size="large"
    style="width: 100%"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="ID" width="55" />
    <el-table-column prop="createTime" label="加入时间" width="250" />
    <el-table-column prop="username" label="用户名" />
    <el-table-column prop="nickName" label="昵称" />
    <el-table-column prop="phone" label="联系方式" />
    <el-table-column prop="role" label="角色" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="userSize"
    :current-page="currentPage"
    @update:currentPage="handle"
    :hide-on-single-page="true"
  ></el-pagination>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useMainStore } from '@/stores/mainStore'
import request from '@/request'
import { useRouter } from 'vue-router'

/**
 * 全局变量
 */
const mainStore = useMainStore()
const router = useRouter()
/**
 * 模块: 数据模块
 * 实现功能: 分页数据抓取
 **/
const userSize = ref(0) // 数据规模
const userData = ref([]) // 用户数据
const currentPage = ref(1)
// 获取数据规模
request
  .get({
    url: '/api/user/scale'
  })
  .then(({ data }) => {
    userSize.value = data[0].scale
    console.log(userSize.value)
  })
// 页面切换请求数据
watchEffect(async () => {
  const { data } = await request.post({
    url: '/api/user/list',
    data: {
      page: currentPage.value,
      size: '10'
    }
  })
  userData.value = data
  console.log(userData.value)
})
// 页面切换事件
const handle = (e) => {
  currentPage.value = e
}

/**
 * 模块: 选择
 * 实现功能: 单选多选
 **/
const selectedList = ref([])
// 单选事件
const allSelected = (payload) => {
  console.log(payload)
}
// 全选事件
const selected = (payload) => {
  selectedList.value = payload
  console.log(selectedList.value)
}

/**
 * 模块: 删除
 */
const handleDelete = (index, row) => {
  ElMessageBox.confirm('您确定要删除该用户吗?', '删除操作', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      const flag = await mainStore.deleteUser('/api/user/delete', row.id)
      if (flag) {
        // 删除对应数据
        userData.value.splice(index, 1)
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      } else {
        ElMessage({
          type: 'error',
          message: '删除失败'
        })
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除'
      })
    })
}
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
.el-pagination {
  margin-top: 20px;
  justify-content: center;
}
</style>
