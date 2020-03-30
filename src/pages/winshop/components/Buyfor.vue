<!-- 容器组件 -->
<template>
	<div class="header">
   <!--  选择地区 -->
      <div class="header-font">境内·港澳台</div>

       <div class="header-two">
          <router-link to="/city">
             <div class="header-pos">北京</div>
          </router-link>
       <div class="iconfont header-pos1">我的位置&#xe6c6;</div>
	   </div>

     <div class="header-time">
       <div class="header-time1">入住</div>
       <div class="header-time2">离店</div>
       <div class="header-time3">人数</div>
     </div>

     <div class="header-riqi">
       <div class="header-riqi1">3月29日</div>
       <div class="header-riqi2">3月30日</div>
       <div class="header-riqi3">不限</div>
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
      text-align: center
      color: #000
    .header-two
      position: absolute
      font-size: 0.35rem
      top: 1rem
      color: #000
      font-weight: bold
      width: 100%
      .header-pos
        position: absolute
        top: 0rem
        left: 0.5rem
        color: #000
        font-weight: bold
        margin-right: 0.5rem
        text-overflow: ellipsis
      .header-pos1
        position: absolute
        overflow: hidden
        text-overflow: ellipsis
        right: 0.8rem
    .header-time
      font-size: .3rem
      .header-time1
        position: absolute
        text-align: left
        top: 1.8rem
        left: .5rem
        width: 90%
      .header-time2
        text-align: center
        position: absolute
        top: 1.8rem
        left: .5rem
        width: 90%
      .header-time3
        text-align: right
        position: absolute
        top: 1.8rem
        right: .5rem
        width: 90%
    .header-riqi
      font-size: .4rem
      font-weight: bold
      .header-riqi1
        position: absolute
        text-align: left
        top: 2.2rem
        left: .22rem
        width: 90%
      .header-riqi2
        text-align: center
        position: absolute
        top: 2.2rem
        left: .5rem
        width: 90%
      .header-riqi3
        text-align: right
        position: absolute
        top: 2.2rem
        right: .37rem
        width: 90%
    .header-input
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
