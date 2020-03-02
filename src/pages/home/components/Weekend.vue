<template>
	<div>
		<div class="title">
			周末去哪儿玩
		</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
	name: 'HomeWeekend',
	data () {
		return {
			recommendList: [{
				id: '0001',
				imgUrl:"http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg",
				title: '重庆夜景大赏',
				desc: '享巴渝特色，赏两江风光，感受不一样的重庆夜景'
			},{
				id: '0002',
				imgUrl:"http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg",
				title: '重庆必打卡',
				desc: '重庆，非去不可'
			},{
				id: '0003',
				imgUrl:"http://img1.qunarzz.com/sight/source/1505/48/f5bc37dba8b542.jpg_r_640x214_d33cd232.jpg",
				title: '踏青好去处',
				desc: '热爱自然，喜欢户外的你千万别错过'
			},{
				id: '0004',
				imgUrl:"http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg",
				title: '重庆最美古镇',
				desc: '行走重庆最美古镇，让你瞬间穿越千年'
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
	.item-img-wrapper
		height: 0
		overflow: hidden
		padding-bottom: 33.9%
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