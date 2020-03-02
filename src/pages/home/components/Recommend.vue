<template>
	<div>
		<div class="title">
			热销推荐
		</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeRecommend',
	data () {
		return {
			recommendList: [{
				id: '0001',
				imgUrl:"http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg",
				title: '武隆天坑地缝国家地质公园',
				desc: '《变形金刚4》取景地'
			},{
				id: '0002',
				imgUrl:"http://img1.qunarzz.com/sight/p0/2001/5f/5f3e7e28809f9901a3.img.jpg_200x200_d12b3082.jpg",
				title: '金佛山',
				desc: '金佛山介绍'
			},{
				id: '0003',
				imgUrl:"http://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_200x200_7971dc7e.jpg",
				title: '武隆天生三桥风景区',
				desc: '武隆天生三桥风景区介绍'
			},{
				id: '0004',
				imgUrl:"http://img1.qunarzz.com/sight/p0/2001/6b/6b063c7ad09280efa3.img.jpg_200x200_a3bb303b.jpg",
				title: '统景温泉',
				desc: '统景温泉介绍'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		display:flex
		height: 1.9rem
		overflow: hidden
		border: solid #ffe 1px; 
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			min-width: 0
			flex: 1
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
			.item-button
				line-height:.44rem
				margin-top: 0.16rem
				background: #ff9300
				padding: 0 .1rem
				border-radius: 0.6rem
				color: #fff


</style>