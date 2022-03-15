<template>
  <el-table
    :data="userList"
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
    :total="userScale"
    :current-page="currentPage"
    @update:currentPage="handle"
    :hide-on-single-page="true"
  ></el-pagination>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, computed } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

/**
 * 全局变量
 */
const userStore = useUserStore()
const router = useRouter()
/**
 * 模块: 数据模块
 * 实现功能: 分页数据抓取
 **/
const userScale = computed(() => userStore.userScale) // 数据规模
const userList = computed(() => userStore.userList) // 用户数据
// 获取数据规模
userStore.getUserScale()

// 页面切换事件
const currentPage = ref(1)
const handle = (e) => {
  currentPage.value = e
}

// 数据获取
watchEffect(() => {
  userStore.getUserList(currentPage.value)
})

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
const handleDelete = (index, { id }) => {
  ElMessageBox.confirm('您确定要删除该用户吗?', '删除操作', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      userStore.deleteUser(index, id)
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
