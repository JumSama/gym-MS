<template>
  <el-form
    ref="form"
    :model="userInfo"
    label-width="100px"
    label-position="top"
    size="default"
    :rules="rules"
  >
    <el-form-item label="头像 ( avatar )">
      <div class="avatar-upload">
        <span class="iconfont icon-shangchuan"></span>
        <user-upload @onAvatarUrl="onAvatarUrl"></user-upload>
      </div>
    </el-form-item>
    <el-form-item label="用户名 ( username )" prop="username">
      <el-input v-model="userInfo.username" />
    </el-form-item>
    <el-form-item label="昵称 ( nickName )" prop="nickName">
      <el-input v-model="userInfo.nickName" />
    </el-form-item>
    <el-form-item label="联系方式 ( phone number )" prop="phone">
      <el-input v-model="userInfo.phone" />
    </el-form-item>
    <el-form-item label="电子邮箱 ( email )" prop="email">
      <el-input v-model="userInfo.email" />
    </el-form-item>
    <el-form-item label="用户类型 ( type )" prop="type">
      <el-radio-group v-model="userInfo.type">
        <el-radio border label="管理员" />
        <el-radio border label="会员" />
        <el-radio border label="普通用户" />
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">修改</el-button>
      <el-button @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import userUpload from './cpts/user-upload.vue'
import { useUserStore } from '@/stores/userStore.js'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const route = useRoute()

// form表单DOM节点
const form = ref(null)

// 用户名验证
const checkUsername = (rule, value, callback) => {
  if (value == '') {
    callback(new Error('用户名不许为空!'))
  } else if (value.length < 10 || value.length > 18) {
    callback(new Error('用户名长度必须是10~18!'))
  }
  callback()
}

// 手机号验证
const checkPhone = (rule, value, callback) => {
  const reg_phone =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (!reg_phone.test(value)) callback(new Error('联系方式格式有误!'))
  callback()
}

// email验证
const checkEmail = (rule, value, callback) => {
  const reg_email =
    /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!reg_email.test(value)) callback(new Error('电子邮箱格式有误!'))
  callback()
}

// type验证
const checkType = (rule, value, callback) => {
  if (value == '') {
    callback('类型是必选项!')
  }
  callback()
}

// nickName
const checkNickName = (rule, value, callback) => {
  if (value.length > 10 || value.length < 4) {
    callback(new Error('昵称长度必须控制在10~20'))
  }
  callback()
}

// 规则表
// 大坑!!!!!!!!!!!!!!!! 每个自定义验证规则都需要调用callback函数
const rules = reactive({
  username: [{ validator: checkUsername, trigger: 'blur', required: true }],
  phone: [{ validator: checkPhone, trigger: 'blur', required: true }],
  nickName: [{ validator: checkNickName, trigger: 'blur', required: true }],
  email: [{ validator: checkEmail, trigger: 'blur', required: true }],
  type: [{ validator: checkType, trigger: 'change', required: true }]
})

// 表单双向绑定数据
let userInfo = reactive({
  username: '',
  phone: '',
  email: '',
  type: '',
  avatarUrl: '',
  nickName: ''
})

// 获取用户信息
userStore.getUserById(route.query.id).then(({ data }) => {
  console.log(data)
  for (const item in data) {
    if (userInfo.hasOwnProperty(item)) {
      userInfo[item] = data[item]
    }
  }
})

// 获取头像filename
function onAvatarUrl(payload) {
  userInfo.avatarUrl = payload
}

// 重置表单
function onReset() {
  form.value.resetFields()
}

// 提交表单
function onSubmit() {
  // 数据有误回调函数被调用
  form.value.validate(async (valid) => {
    if (valid) {
      userStore.updateUser(userInfo)
      ElMessage.success('用户修改成功!')
      onReset()
    } else {
      ElMessage.error('数据格式有误，请认真检查!')
    }
  })
}
</script>

<style lang="scss" scoped>
.el-radio-group {
  margin-right: 12px;
}
.el-form {
  margin: auto;
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 2px #666;
  border-radius: 4px;
  max-width: 1000px;
}
.avatar-upload {
  position: relative;
  & span {
    position: absolute;
    font-size: 88px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}
</style>
