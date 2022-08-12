<template>
  <div class="container">
    <div class="login-form">
      <div class="system-name">无聊随便写</div>
      <el-form ref="loginForm" :model="form" label-width="80px" :rules="rules" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginForm)">Submit</el-button>
          <el-button @click="resetForm(loginForm)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const loginForm = ref<FormInstance>()

const form = reactive({
  name: "",
  password: ""
})

const rules = reactive({
  name: [{ required: true, message: '账号不能空' }],
  password: [{ required: true, message: '密码不能为空' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      localStorage.setItem('token','123')
      router.push('/')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  background-image: url('../assets/bg/pexels-burst-373883.jpg');
  opacity: .8;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.login-form {
  width: 300px;
  text-align: center;
  position: absolute;
  top: 30%;
  right: 10%;
  overflow: hidden;
  opacity: .9;
  z-index: 1;
  background: #adb5bd;
  padding: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/bg/pexels-burst-373883.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    filter: blur(10px);
    z-index: -1;
  }

  .system-name {
    font-size: 24px;
    padding-bottom: 10px;
  }
}
</style>