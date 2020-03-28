<template>
	<div class="header">
		<div class="header-left">
		<router-link to='/'>
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		</div>
		<div class="header-input">
			<span>个人中心</span>
		</div>
		<div class="header-right">登录/注册</div>
	</div>
</template>

<script >
	export default{
		name:"InfoHeader",
		
	}
</script>

<style lang="stylus" scoped>
	.header
		background: #00bcd4
		display: flex
		line-height: .86rem
		color: #fff
		.header-left
			width: .64rem
			float: left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: 2.4rem
			border-radius: .1rem
			color: #fff
		.header-right
			min-width: 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			color: #fff
</style>