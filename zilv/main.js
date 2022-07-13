import App from './App'

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'
uni.$http = $http
//请求根路径
// $http.baseUrl = 'http://192.168.3.82:55555'
// $http.baseUrl = 'https://api.gugu2019.com/v1'

// 测试接口
$http.baseUrl = 'http://test.gugu2019.com'

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


//引入 vuex
import store from "./store"
Vue.prototype.$store = store
// 阻止显示生产模式的信息
Vue.productionTip = false


// 引入AES加密插件
import AES from '@/js_sdk/ar-aes/ar-aes.js'
Vue.prototype.AES = AES.AES

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
		//挂载
		store
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