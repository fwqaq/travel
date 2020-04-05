import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Info from '@/pages/info/Info'
import Winshop from '@/pages/winshop/Winshop'
import Airplane from '@/pages/airplane/Airplane'
import Order from '@/pages/order/Order'
import Searchorder from '@/pages/searchorder/Searchorder'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path: '/city',
    	name: '/City',
    	component: City
    },{
    	path: '/detail/:id',//动态路由 :表示的就是前面是detail，后面可以加上一个id
    	name: 'Detail',
    	component: Detail

    },{
      path: '/info',
      name: '/Info',
      component: Info
    },{
      path: '/winshop',
      name: 'Winshop',
      component: Winshop
    },{
      path: '/airplane',
      name: 'Airplane',
      component: Airplane
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/searchorder',
      name: 'Searchorder',
      component: Searchorder 
    }],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }//页面切换的时候始终回到最顶部
})
