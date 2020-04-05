<template>
	<div class="header">
		<div class="top">
			<router-link to="/" class="top">
			<div class="iconfont back1">&#xe624;</div>
		</router-link>
			<div class="font-center">我的订单
				<div class="iconfont back2">&#xe609;</div>
			</div>
				<router-link to="/searchorder">
					<div class="font-right">订单查询</div>
				</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'OrderHeader',
}
</script>

<style lang="stylus" scoped>
	.top
		height: 0.8rem
		width: 100%
		position: fixed
		background: #fff
		border-bottom: 2px solid #E8E8E8
		color: #666666
		z-index: 999
		.back1
			position: absolute
			font-size: 0.4rem
			top: 0.2rem
			left: 0.3rem
			color: #000
			z-index: 999
		.font-center
			position: absolute
			left: 2.7rem
			font-size: 0.4rem
			top: 0.2rem
			z-index: 999
			width: 2rem
			.back2
				top: 0.2rem
				right: 0rem
				position: absolute
		.font-right
			position: absolute
			right: 0.2rem
			top: 0.3rem
			z-index: 999
			font-size: 0.3rem
			color: #00bcd4
</style>