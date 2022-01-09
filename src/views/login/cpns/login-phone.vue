<template>
  <div class="login-phone">
    <el-form :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const phone = reactive({
      num: '',
      code: ''
    })
    const loginAction = () => {
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
    return {
      phone,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
