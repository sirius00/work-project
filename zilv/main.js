import App from './App'

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http

//请求根路径
$http.baseUrl = 'http://localhost:55555'

// 请求拦截器
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '加载中',
    mask: true
  })
}

//响应拦截器
$http.afterRequest = function() {
  uni.hideLoading()
}



// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif