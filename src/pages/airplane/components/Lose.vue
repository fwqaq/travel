<template>
	<div class="header">
		<table class="tab">
			<tr class="back">
				<td>
					<div class="iconfont icon-back">&#xe618;</div>
				</td>
				<td>
					<div class="iconfont icon-back">&#xe6a4;</div>	
				</td>
				<td>
					<div class="iconfont icon-back">&#xe7d4;</div>
				</td>
				<td>
					<div class="iconfont icon-back">&#xe637;</div>
				</td>
			</tr>
			<tr class="back1">
				<td ><div class="icon-font">低价机票</div></td>
				<td ><div class="icon-font">多地比价</div></td>
				<td ><div class="icon-font">航班动态</div></td>
				<td ><div class="icon-font">值机选座</div></td>
			</tr>
		</table>
	</div>
</template>

<script >
	export default{
		name: 'AirLose',
	}
</script>

<style lang="stylus" scoped>
	.header
		position: absolute
		top: 8.1rem
		left: 0.38rem
		right: 0.5rem
		background: #ddd
		width: 91.5%
		.tab
			left: 2rem
			width: 100%
			align: center 
			valign: center 
			border-top-style: ridge
			border-bottom-style: ridge
			border-left-style: ridge
			border-right-style: ridge
			border-color: #F8F8FF
			height: 1.5rem
			background: #fff
			.back
				font-size: 0.8rem
				.icon-back
					text-align: center
					font-size: 0.6rem
			.back1
				text-align: center
				font-size: 0.3rem
		.detail
			width: 100%
			height: 0.8rem
			left: 0
			.detail1
				position: absolute
				left: 0.2rem
			.detail2
				position: absolute
				text-align: center
			.detail3
				position: absolute
</style>