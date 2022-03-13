<template>
  <el-table
    :data="tableData"
    @select="selected"
    size="large"
    style="width: 100%"
    ref="multiple"
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
const currentPage = ref(null)

// 数据规模
const userSize = ref(0)

// 分页数据
const userData = ref([])
const handle = (e) => {
  // 请求分页数据
  console.log(e)
}

// 多选
const multiple = ref(null)

// 当前选中列表proxy
const currentSelected = ref([])
const selected = (payload) => {
  currentSelected.value = payload
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
