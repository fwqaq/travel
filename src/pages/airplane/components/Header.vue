<template>
	<div class="wrapper">
		<div class="header-top">
		<router-link to="/">
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		<div class="font">机票</div>
		<div class="iconfont right-icon">&#xe605;客服</div>
		</div>
		<img class="swiper-img" src="//imgs.qunarzz.com/ftejia/1806/14/9d003a85e4695f.png"/>
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
		background: #fff
		z-index: -1
		.header-top
			height: 0.8rem
			position: fixed
			z-index: 999
			width: 100%
			overflow: hidden
			background: #00bcd4
			.font
				font-size: .24rem 
				position: fixed
				z-index: 999
				top: 0.2rem
				left: 3.3rem
				font-size: 0.35rem
				color: #fff
			.back-icon
				font-size: .2rem 
				overflow: hidden
				position: fixed
				z-index: 999
				top: 0.2rem
				font-size: 0.4rem
				color: #fff
				font-weight: bold
			.right-icon
				font-size: .28rem
				color: #fff
				margin-top: 0.05rem
				overflow: hidden
				position: fixed
				z-index: 999
				top: 0.2rem
				right: .05rem
		.swiper-img
			width: 100%
			height: 7rem
</style>