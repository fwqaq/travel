<template>
	<div class="header">
		<div class="kong"></div>
		<div class="money">
			<div class="iconfont back-icon">&#xe612;</div>
			<div class="money-font">我的钱包</div>
		</div>
		<div class="remain">
			<table width="100%" height="100%">
				<tr>
					<td>0.00</td>
					<td>0</td>
					<td>0张</td>
				</tr>
				<tr>
					<td>账户余额</td>
					<td>代金券</td>
					<td>银行卡</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script >
	export default{
		name:"InfoMoney",


	}
</script>

<style lang="stylus" scoped>
	.kong
		height: .04rem
		background: #ddd
		margin-top: .2rem
	.money
		width: 100%
		height: 0.84rem
		background: #fff
		border-style: groove
		border-color: #fff
		display: flex
		.back-icon
			text-align: left
			font-size: .7rem
			width: 0.64rem
			height: 0.64rem
			top: .03rem
			margin-top: .1rem
			fill: currentColor
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
			font-size: .5rem
	.remain
		width: 100%
		height: 1.0rem
		border-style: groove
		border-color: #ddd
		background: #fff
		display: flex
		font-size: .25rem
</style>