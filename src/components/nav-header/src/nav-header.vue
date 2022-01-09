<template>
  <div class="nav-header">
    <el-icon>
      <template v-if="isFold === true">
        <circle-plus-filled class="fold-menu" @click="handleFoldClick" />
      </template>
      <template v-else>
        <remove-filled class="fold-menu" @click="handleFoldClick" />
      </template>
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      <div><user-info /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    userInfo,
    HyBreadcrumb
  },
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }

    const store = useStore()

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { handleFoldClick, isFold, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
