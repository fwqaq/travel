<!-- 容器组件 -->
<template>
	<div>
    <winshop-header :list="swiperList"></winshop-header>
    <winshop-buyfor></winshop-buyfor>
    <winshop-detail></winshop-detail>
    <winshop-list :list="shopList"></winshop-list>
	</div>
</template>

<script>
import WinshopHeader from './components/Header'
import WinshopBuyfor from './components/Buyfor'
import WinshopDetail from './components/Detail'
import WinshopList from './components/List'
import axios from 'axios'
export default {
  name: 'Winshop',
  components:{
    WinshopHeader,
    WinshopBuyfor,
    WinshopDetail,
    WinshopList
  },
  data () {
    return {
      swiperList: [],
      shopList: []
    }
  },
  methods: {
    getHomeInfo () { 
      axios.get('/api/shop.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.shopList = data.shopList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }

}

</script>

<style lang="stylus" scoped>

</style>
