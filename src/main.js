import Vue from 'vue'
import App from './App.vue'
import './assets/style/global.css'
import './assets/style/reset.css'
import router from "./routers/index"
import DatePicker from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(DatePicker)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
