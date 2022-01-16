import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import type { HYRequestInterceptors, HYRequestConfig } from './type'

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
  loading?: any
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有的实例都有的拦截器:请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            text: '正在请求数据',
            lock: true,
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器:请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有的拦截器:响应成功拦截')
        this.loading?.close()
        const data = res.data
        if (data.returnCode === -1001) {
          console.log('请求失败')
        }
        return data
      },
      (err) => {
        console.log('所有的实例都有的拦截器:响应失败拦截')
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default HYRequest
