// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
<<<<<<< HEAD
import 'styles/reset.css'// 页面主页
import 'styles/border.css'// 使用border.css像素边框
import 'styles/iconfont.css'
=======
import './assets/styles/reset.css'// 页面主页
import './assets/styles/border.css'// 使用border.css像素边框
>>>>>>> 5ff77c93a9d996392778f8ce8e114bcd42714f66

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

<<<<<<< HEAD
// 路由就是根据网址的不同，返回不同的内容给用户
=======
// 路由就是根据网址的不同，返回不同的内容给用户
>>>>>>> 5ff77c93a9d996392778f8ce8e114bcd42714f66
