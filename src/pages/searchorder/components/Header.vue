<template>
	<div class="header">
		<div class="header-top">
			<div class="top">
				<div class="font-left">+86</div>
				<div class="input-center">
					<input type="text" v-model="keyword" placeholder="输入手机号查询订单" class="input">
				</div>
			</div>
			<router-link to="/order">
				<div class="font-right">取消</div>
			</router-link>
		</div>
		
	</div>
</template>

<script>


	export default{
		name: 'SearchorderHeader',
}
</script>

<style lang="stylus" scoped>
	.header-top
		position: fixed
		height: 1rem
		width: 100%
		border-bottom: 2px solid #E8E8E8
		.top
			flex: 1
			width: 75%
			left: 0.5rem
			position: relative
			display: inherit
			background: #ececec
			height: 0.65rem
			border-radius: .04rem
			top: 0.2rem
			.font-left
				top: 0.1rem
				line-height: 0.35rem
				left: rem
				height: 0.3rem
				width: 0.5rem
				position: absolute
				padding: .05rem .09rem .05rem .1rem
				border-radius: 0 .04rem .04rem 0
				display: inherit
				background: #ececec
				border-right: 2px solid #999999
			.input-center
				position: relative
				top: 0.1rem
				left:0.8rem
				.input
					background: #E8E8E8
					width: 80%
		.font-right
			top: 0.35rem
			right: 0.3rem
			color: #00bcd4
			position: absolute
			font-size: 0.33rem

</style>