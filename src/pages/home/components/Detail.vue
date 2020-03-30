<template>
	<div>
		<div class="header">
			<router-link to='/winshop'>
				<div class="iconfont header-back">&#xe62f;</div>
				<div class="shop-font">酒店</div>
			</router-link>
			<router-link to='/airplane'>
				<div class="iconfont header-back1">&#xe753;</div>
				<div class="shop-font1">机票</div>
			</router-link>
		</div>
	</div>
</template>

<script >
	export default{
		name:"HomeDetail",

	}
</script>

<style lang="stylus" scoped>
	.header
		position: fixed
		bottom: 0
		height: .86rem
		width: 100%
		line-height: .86rem
		overflow: hidden
		text-align: center
		color: #fff
		background: #00bcd4
		font-size: .32rem
		.header-back
			position: absolute
			top: 0
			left: 1.5rem
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
		.shop-font
			position: absolute
			top: 0
			left: 2.1rem
			color: #ddd
		.header-back1
			position: absolute
			top: 0
			right: 1.5rem
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
		.shop-font1
			position: absolute
			top: 0
			right: 2.1rem
			color: #ddd
</style>