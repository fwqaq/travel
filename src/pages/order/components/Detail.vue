<template>
	<div class="header">
		<img src="//s.qunarzz.com/ordercenter_mobile/images/order_login.png" class="img">
		<div class="font">没有查询到相关订单</div>
	</div>
</template>

<script>
	export default{
		name: 'OrderDetail',
		
}
</script>

<style lang="stylus" scoped>
	.header
		position: absolute
		top: 1.75rem
		width: 100%
		border-top: 2px solid #E8E8E8
		z-index: -1
		.img
			top: 2.5rem
			position: relative
		.font
			top: 2.8rem
			position: relative
			text-align: center
</style>