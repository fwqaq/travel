<!-- 容器组件 -->
<template>
	<div class="header">
      <table class="header-table">
        <tr>
          <td>
            <div class="iconfont back-icon">&#xe604; </div>
            <div class="back-font">无接触房</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe61d; </div>
            <div class="back-font">周租月租</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe622;</div>
            <div class="back-font">全家出游</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe620;</div>
            <div class="back-font">四合院</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe650;</div>
            <div class="back-font">商家自营</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="iconfont back-icon">&#xe614;</div>
            <div class="back-font">青年旅社</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe6ff;</div>
            <div class="back-font">新房特惠</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe63e;</div>
            <div class="back-font">人气民宿</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe684;</div>
            <div class="back-font">住房攻略</div>
          </td>
          <td>
            <div class="iconfont back-icon">&#xe602;</div>
            <div class="back-font">美拍屋</div>
          </td>
          
        </tr>
      </table>
	</div>
</template>

<script>

export default {
  name: 'WinshopDetail'
}

</script>

<style lang="stylus" scoped>
  .header
    position: absolute
    top: 9.4rem
    width: 100%
    height: 2rem
    background: #ddd
    .header-table
      width: 100%
      height: 100%
      border:solid 1px #F0F8FF
      margin: auto
      .back-icon
        font-size: .6rem
        text-align: center
      .back-font
        font-size: .3rem
        text-align: center
</style>
