<template>
  <div class="user">
    <page-search :searchformConfig="searchformConfig"></page-search>
    <div class="content">
      <hy-table :listData="userList" :propList="propList">
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import pageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

import { searchformConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList: any[] = [
      { prop: 'name', label: '角色名', minWidth: '100' },
      { prop: 'intro', label: '权限介绍', minWidth: '100' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      { label: '操作', minWidth: '120', slotName: 'handler' }
    ]
    return {
      searchformConfig,
      userList,
      propList
    }
  },
  components: {
    pageSearch,
    HyTable
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
