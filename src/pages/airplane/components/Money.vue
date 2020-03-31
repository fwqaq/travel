<!-- 容器组件 -->
<template>
	<div class="header">
   <!--  选择地区 -->
      <div class="header-font">
      	<div class="header-font1">国内</div>
      	<div class="header-font2">国际/中国港澳台</div>
      	<div class="header-font3">往返</div>
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
      <span class="iconfont">&#xe632;</span>
      <input  type="text" placeholder="位置/景点/店名">
    </div>

    <div class="header-button">
      开始搜索
    </div>
    <div class="header-detial">
      <div class="iconfont header-detail1">&#xe6aa;线上开发票</div>
      <div class="iconfont header-detail2">&#xe636;24小时客服</div>
      <div class="iconfont header-detail3">&#xe61d;房源真实认证</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WinshopBuyfor',

}

</script>

<style lang="stylus" scoped>
 .header
    top: 4.2rem
    left: .4rem
    position: absolute 
    z-index: auto
    background-color: rgba(0,0,0,0~1)
    height: 5.1rem
    width: 90%
    .header-font
      font-size: 0.4rem
      color: #000
      .header-font1
      	position: absolute
      	left: 0.5rem
      .header-font2
      	position: absolute
      	left: 1.95rem
      .header-font3
      	position: absolute
      	right: 0.5rem
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
   	  top: 0.5rem
      font-weight: bold
      flex: 1
      height: .64rem
      width: 6rem
      line-height: .64rem
      margin-top: 2.4rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
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
        text-align: left
      .header-detail2
        position: absolute
        left: 2.3rem
        font-size: .3rem
        text-align: center
      .header-detail3
        font-size: .3rem
        text-align: right
</style>
