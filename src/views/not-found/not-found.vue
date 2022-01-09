<template>
  <div>
    <el-result title="404" sub-title="Sorry, request error">
      <template #icon>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
      </template>
      <template #extra>
        <el-button type="primary" size="medium" @click="back">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router/index'

export default defineComponent({
  setup() {
    const back = () => {
      router.go(-1)
    }
    return {
      back
    }
  }
})
</script>

<style scoped></style>
