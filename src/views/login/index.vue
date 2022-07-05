<template>
  <div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="  密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input class="inputs" v-model="ruleForm.code" />
        <img :src="data.captchaImg" @click="getCode" />
      </el-form-item>

      <el-button type="success" @click="getlogins">提交</el-button>
      <el-button>获取密码</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { getCodes } from '../../api/login'
const ruleFormRef = ref()
const ruleForm = reactive({
  username: 'test',
  password: '',
  code: '',
  token: ''
})
const data = reactive({
  token: '',
  captchaImg: ''
})

/**
 * 效验规则
 */
const rules = reactive({
  username: [{ required: true, message: '用户名必填', trigger: 'blur' }],
  password: [{ required: true, message: '密码必填', trigger: 'blur' }],
  code: [{ required: true, message: '验证码必填', trigger: 'blur' }]
})
/**
 * 图形验证码
 */
async function getCode() {
  const res = await getCodes()
  data.token = res.data.data.token
  data.captchaImg = res.data.data.captchaImg
}
getCode()

/**
 * 登录验证
 */
async function getlogins() {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate((valid) => {
    if (valid) {
      console.log('!')
    } else {
      console.log('error submit!')
    }
  })
}
</script>
<style lang="scss" scoped>
.el-form {
  width: 300px;
  text-align: center;
  .el-form-item {
    width: 300px;
    float: right;
    .inputs {
      width: 100px;
      display: flex;
    }
  }
}
</style>
