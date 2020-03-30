<template>
	<div class="header">
		<div class="title">
			必睡清单
		</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'WinshopList',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
.header
	top: 11.5rem
	position: absolute
	.title
		line-height: .8rem
		background: #eee
		text-indent: .2rem
		font-size: 0.4rem
		font-weight: bold
	.item-img-wrapper
		height: 0
		overflow: hidden
		padding-bottom: 37.09%
	.item-img
		width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
		.item-desc
			line-height: .4rem
			color: #ccc
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
</style>