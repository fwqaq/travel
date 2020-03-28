<template>
	<div>
		<div class="kong"></div>
		<div class="list-one">
				<div class="iconfont back-icon">&#xedd1;</div>
				<div class="money-font">意见反馈</div>
				<div class="iconfont back-right">&#xe707;</div>
		</div>

		<div class="list-one">
			<div class="iconfont back-icon">&#xe625;</div>
			<div class="money-font">关于My旅游APP</div>
			<div class="iconfont back-right">&#xe707;</div>
		</div>

	</div>
</template>

<script >
	export default{
		name:"InfoDetail",
	}
</script>

<style lang="stylus" scoped>
	.kong
		height: .04rem
		background: #ccc
		margin-top: .2rem
	.list-one
		width: 100%
		height: 0.84rem
		background: #fff
		border-color: #fff
		display: flex
		border-style: dashed
		.back-icon
			text-align: left
			font-size: .7rem
			width: 0.64rem
			height: 0.64rem
			top: .03rem
			margin-top: .1rem
		.money-font
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color: #000
			font-size: .35rem
		.back-right
			text-align: right
			font-size: .4rem
			width: 0.64rem
			height: 0.64rem
			top: .04rem
			margin-top: .2rem
</style>