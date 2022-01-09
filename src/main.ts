import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import { globalRegister } from './global'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import './service/axios.demo'
import './service/index'

import App from './App.vue'

import router from './router/index'
import store from './store/index'
import { setupStore } from './store/index'
import hyRequest from './service/index'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

// app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.NODE_ENV)
// console.log(process.env.VUE_APP_BASE_URL)
// hyRequest.request({
//   url: 'http://httpbin.org//get',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独请求的response')
//       return res
//     }
//   }
// })
interface Datatype {
  data: any
  returnCode: string
  success: boolean
}
