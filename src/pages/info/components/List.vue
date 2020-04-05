<template>
	<div class="list">
		<div class="kong"></div>
	
			<div class="list-one">
				<router-link to="/order" class="list-one">
				<div class="iconfont back-icon" >&#xe601;</div>
				<div class="money-font" >我的订单</div>
				<div class="iconfont back-right">&#xe707;</div>
				</router-link>
			</div>
			<div class="list-one">
				<router-link to="/order" class="list-one">
				<div class="iconfont back-icon">&#xe7a2;</div>
				<div class="money-font">我的退款</div>
				<div class="iconfont back-right">&#xe707;</div>
				</router-link>
			</div>
			<div class="list-one">
				<router-link to="order" class="list-one">
				<div class="iconfont back-icon">&#xe6b5;</div>
				<div class="money-font">我的发票</div>
				<div class="iconfont back-right">&#xe707;</div>
				</router-link>
			</div>
			
			<div class="list-one">
				<router-link to="/order" class="list-one"> 
				<div class="iconfont back-icon">&#xe678;</div>
				<div class="money-font">我的攻略</div>
				<div class="iconfont back-right">&#xe707;</div>
			</router-link>
			</div>
	</div>
</template>

<script>
	export default{
		name:"InfoList",

	}
</script>

<style lang="stylus" scoped >
.list
	border-style: groove
	.kong
		height: .04rem
		background: #ddd
		margin-top: .2rem
	.list-one
		width: 100%
		height: 0.84rem
		background: #fff
		border-color: #fff
		display: flex
		border-style: dashed
		top: 0
		.back-icon
			text-align: left
			font-size: .7rem
			width: 0.64rem
			height: 0.64rem
			top: .03rem
			margin-top: .1rem
			fill: currentColor
			overflow: hidden
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