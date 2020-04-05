<!-- 容器组件 -->
<template>
	<div class="header">
   <!--  选择地区 -->
      <div class="header-font">
      	<div class="header-font1" @click="handleClick1" :style="{'color':this.str}" :key=this.str>国内</div>
      	<div class="header-font2" @click="handleClick2" :style="{'color':this.str1}" :key=this.str1>国际/中国港澳台</div>
      	<div class="header-font3" @click="handleClick3" :style="{'color':this.str2}" :key=this.str2>往返</div>
      </div>

       <div class="header-two">
          <router-link to="/city">
             <div class="header-pos">北京</div>
          </router-link>
          <!-- 加上飞机的图标 -->
          <div class="iconfont header-back">&#xe660;</div>
       <div class="header-pos1">上海</div>
	   </div>

     <div class="header-time">
       <div class="header-time1">03月31号</div>
       <div class="header-time2">周二</div> 
     </div>

     <div class="header-input">
      <div class="header-input1">选择舱位</div>
      <div class="label">
        <input type="radio" id="male" value="Male" v-model="gender">携带儿童
        <div class="age1">2~12岁</div>
        <input type="radio" id="female" value="Female" v-model="gender">携带婴儿
        <div class="age2">14天~2岁</div>
      </div>
    </div>

    <div class="header-button">
      搜索
    </div>
    <div class="header-detial">
      <router-link to="order" class="header-detail">
      <div class="iconfont header-detail1">&#xe629;我的订单</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WinshopBuyfor',
  data () {
    return {
      gender: '',
      str: '#00bcd4',
      str1: '#000000',
      str2: '#000000'
    }

  },
  methods: {
    handleClick1 () {
      this.str = '#00bcd4',
      this.str1 = '#000000',
      this.str2 = '#000000'
    },
    handleClick2 () {
      this.str = '#000000'
      this.str1 = '#00bcd4'
      this.str2 = '#000000'
    },
    handleClick3 () {
      this.str = '#000000'
      this.str1 = '#000000'
      this.str2 = '#00bcd4'
    }
  },
  mounted () {}
}

</script>

<style lang="stylus" scoped>
 .header
    top: 2.8rem
    left: .4rem
    position: absolute 
    z-index: auto
    background-color: rgba(0,0,0,0~1)
    height: 5.1rem
    background: #fff
    width: 90%
    .header-font
      margin-top: 0.2rem
      font-size: 0.4rem
      color: #000
      .header-font1
      	position: absolute
      	left: 0.8rem
      .header-font2
      	position: absolute
      	left: 1.95rem
      .header-font3
      	position: absolute
      	right: 0.8rem
    .header-two
      position: absolute
      font-size: 0.35rem
      top: 1rem
      color: #000
      font-weight: bold
      width: 100%
      font-size: 0.5rem
      .header-back
      	position: absolute
      	left: 3rem
      	font-size: 0.8rem
      .header-pos
        position: absolute
        top: 0.1rem
        left: 0.5rem
        color: #000
        font-weight: bold
        text-overflow: ellipsis
      .header-pos1
      	position: absolute
      	right: 0.5rem
      	top: 0.1rem
    .header-time
      font-size: .35rem
      .header-time1
        position: absolute
        text-align: left
        top: 2rem
        left: .5rem
        width: 90%
      .header-time2
        position: absolute
        top: 2rem
        left: 2.3rem
        width: 90%
        font-size: 0.25rem
        margin-top: 0.09rem
    .header-input
      position: absolute
   	  top: 0.2rem
      left: 0.1rem
      font-size: 0.35rem
      flex: 1
      height: .64rem
      width: 6rem
      line-height: .64rem
      margin-top: 2.4rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      color: #000
      .label
        font-size: 0.25rem
        position: absolute
        top: 0rem
        right:0.5rem
        .age1
          position: absolute
          top: 0.3rem
          left: 0.22rem
        .age2
          position: absolute
          top: 0.3rem
          left: 1.5rem
    .header-button
      left: .5rem
      right: .5rem
      width: 80%
      height: 0.8rem
      top: 3.6rem
      position: absolute
      font-size: 0.5rem
      text-align: center
      background: linear-gradient(-225deg,#ff8d19 0,#ffbf4f 100%) !important
      line-height: .8rem
      border-radius: 19px
      color: #fff
    .header-detial
      top: 4.6rem
      position: absolute
      width: 100%
      color: #000
      .header-detail1
        position: absolute
        font-size: .3rem
        left: 2.5rem
        color: #ddd
</style>
