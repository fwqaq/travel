<template>
	<div class="wrapper">
		<router-link to="/">
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		<img class="swiper-img" src="//imgs.qunarzz.com/ftejia/1806/14/9d003a85e4695f.png"/>
		<div class="font">机票</div>
		<div class="iconfont right-icon">&#xe605;客服</div>
	</div>
</template>

<script>
	export default{
		name: 'AirplaneHeader',
}
</script>

<style lang="stylus" scoped>
	.wrapper
		width: 100%
		height: 5rem
		overflow: hidden
		background: #eee
		position: absolute
		z-index: -1
		.font
			font-size: .24rem 
			position: absolute
			z-index: 999
			top: 0.2rem
			left: 3.3rem
			font-size: 0.35rem
			color: #fff
		.back-icon
			font-size: .24rem 
			overflow: hidden
			position: absolute
			z-index: 999
			top: 0.2rem
			font-size: 0.5rem
			font-weight: bold
		.swiper-img
			width: 100%
			height: 7rem
		.right-icon
			font-size: .28rem
			color: #fff
			overflow: hidden
			position: absolute
			z-index: 999
			top: 0.2rem
			right: .05rem
</style>