<template>
  <el-upload
    class="avatar-uploader"
    action="/file/avatar"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"></el-icon>
  </el-upload>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const emit = defineEmits(['onAvatarUrl'])

const imageUrl = ref('')

// 创建图片URL
const handleAvatarSuccess = (res, file) => {
  emit('onAvatarUrl', res)
  imageUrl.value = URL.createObjectURL(file.raw)
}

// 判断图片格式和大小
const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    ElMessage.error('Avatar picture must be JPG format!')
  }
  if (!isLt2M) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
  }
  return isJPG && isLt2M
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
