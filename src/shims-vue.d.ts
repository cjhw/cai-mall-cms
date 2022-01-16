/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $filters: any

declare let $store: any
declare let ElLoading: any
declare module '*.json'

declare const VUE_APP_BASE_URL: string
declare const VUE_APP_BAES_NAME: string
