<template>
  <el-table
    :data="tableData"
    @select="selected"
    @select-all="allSelected"
    size="large"
    style="width: 100%"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
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
    :total="1000"
    :current-page="currentPage"
    @update:currentPage="handle"
    :hide-on-single-page="true"
  ></el-pagination>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted } from 'vue'
import request from '@/request'

/**
 * 模块: 数据模块
 * 实现功能: 分页数据抓取
 **/
const userSize = ref(0) // 数据规模
const userData = ref([]) // 用户数据
const currentPage = ref(1)
watchEffect(async () => {
  userData.value = await request.post({
    url: '/api/user/list',
    data: {
      page: currentPage.value,
      size: '10'
    }
  })
  console.log(userData.value)
})
// 页面切换事件
const handle = (e) => {
  // 请求分页数据
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

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
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
