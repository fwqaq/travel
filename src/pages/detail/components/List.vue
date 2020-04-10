<template>
	<div calss="header">
		<div class="header-title">
			<div class="header-title-left">
				<div class="font1">5.0</div>
				<div class="font2">分</div>
				<div class="font3">超赞</div>
				<div class="font4">评论数</div>
				<div class="font5">攻略数</div>
				<div class="iconfont back">&#xe707;</div>
			</div>
			<div class="header-title-right">
				<div class="right-font1">景点简介</div>
				<div class="right-font2">开放时间.贴士</div>
				<div class="iconfont back2">&#xe707;</div>
			</div>
		</div>
		<div class="header-addr">
			<div class="iconfont header-addr-pos">&#xe6c6;                     大连市大兴区一零六国道</div>
		</div>
		<div class="list">
			<div class="iconfont back3">&#xe63e;热门推荐</div>
			<div class="list1">
				<div class="title1">大连生涯海洋世界成人票</div>
				<div class="title2"><div class="iconfont back4">&#xe636;</div>
				<div class="backfont">15:00前可定今日,预定后两小时可用</div>
				</div>
				<div class="title3">自营</div>
				<div class="title4">条件退</div>
				<div class="title5">￥180</div>
				<div class="title6"><div class="header-button">预定</div></div>
			</div>
			<div class="list1">
				<div class="title1">大连生涯海洋世界全家桶(四大人一孩子)</div>
				<div class="title2"><div class="iconfont back4">&#xe636;</div>
				<div class="backfont">15:00前可定今日,预定后两小时可用</div>
				</div>
				<div class="title3">自营</div>
				<div class="title4">条件退</div>
				<div class="title5">￥580</div>
				<div class="title6"><div class="header-button">预定</div></div>
			</div>
		<div class="list1">
				<div class="title1">大连生涯海洋世界学生票</div>
				<div class="title2"><div class="iconfont back4">&#xe636;</div>
				<div class="backfont">15:00前可定今日,预定后两小时可用</div>
				</div>
				<div class="title3">自营</div>
				<div class="title4">条件退</div>
				<div class="title5">￥80</div>
				<div class="title6"><div class="header-button">
      预定
    </div></div>
			</div><div class="list1">
				<div class="title1">自驾区车票(不含景区门票)</div>
				<div class="title2"><div class="iconfont back4">&#xe636;</div>
				<div class="backfont">可定明日</div>
				</div>
				<div class="title3">自营</div>
				<div class="title4">条件退</div>
				<div class="title5">￥180</div>
				<div class="title6"><div class="header-button">预定</div></div>
			</div>
		</div>

		<div class="yh">
			<div class="shu">丨</div>
			<div class="ttt">用户评价</div>
			<div class="lei">用户评价内容</div>
		</div>

	</div>
</template>

<script>
	export default {
		name:'DetailList',
		props: {
			list: Array
		}

	}

</script>

<style lang="stylus" scoped>
	.header-title
		height: 1.1rem
		background: #fff
		.header-title-left
			position: absolute
			border-right:1px solid #BDBDBD
			width: 40%
			.font1
				position: absolute
				font-size: 0.5rem
				color: #FF7256
				left: 0.2rem
				top: 0.1rem
			.font2
				position: absolute
				left: 0.9rem
				top: 0.3rem
				color: #FF7256
			.font3
				position: absolute
				left: 1.6rem
				top: 0.28rem
				color: #FF7256
			.font4
				top: 0.7rem
				left: 0.2rem
				position: absolute
				color: #B3B3B3
				font-size: 0.25rem
			.font5
				top: 0.7rem
				position: absolute
				font-size: 0.25rem
				left: 1.6rem
				color: #B3B3B3
			.back
				position: absolute
				right: 0.1rem
				top: 0.3rem
				color: #B3B3B3
		.header-title-right
			position: absolute
			left: 3rem
			box-shadow: 10px 10px 5px #AAAAAA
			width: 50%
			.right-font1
				position: absolute
				top: 0.2rem
				left: 1rem
				font-size: 0.3rem
			.right-font2
				position: absolute
				top: 0.6rem
				left: 1rem
				font-size: 0.25rem
				color: #B3B3B3
			.back2
				position: absolute
				right: 0.2rem
				top: 0.26rem
				color: #B3B3B3
	.header-addr
		width: 100%
		padding-top: 0.2rem
		border-top:1px solid #EBEBEB
		border-bottom:1px solid #EBEBEB
		padding-bottom: 0.2rem
		.header-addr-pos
			font-size: 0.29rem
	.list
		width: 100%
		position: relative
		.back3
			position: relative
			padding-top: 0.2rem
			padding-bottom: 0.2rem
			color:#FF7256
			left: 0.2rem
			width: 100%
			border-bottom:1px solid #EBEBEB
		.list1
			position: relative
			width: 100%
			padding-top: 0.2rem
			border-bottom:1px solid #EBEBEB
			padding-buttom: 0.1rem
			background: #fff
			height: 1.5rem
			.title1
				position: relative
				left: 0.2rem
				font-size: 0.28rem
			.title2
				position: absolute
				width: 100%
				.back4
					position: absolute
					color: #00bcd4
					padding-top: 0.15rem
					font-size: 0.25rem
					left: 0.2rem
				.backfont
					position: absolute
					top: 0.2rem
					left: 0.5rem
					font-size: 0.22rem
			.title3
				position: absolute
				font-size: 0.26rem
				background: #fff
				width: 10%
				height: 0.25rem
				color: #00bcd4    
				border: 1px solid #00bcd4
				text-align: center
				line-height: 0.25rem
				top: 1.1rem
				left: 0.2rem
			.title4
				position: absolute
				font-size: 0.26rem
				background: #fff
				width: 12%
				height: 0.25rem
				color: #00bcd4    
				border: 1px solid #00bcd4
				text-align: center
				line-height: 0.25rem
				top: 1.1rem
				left: 1.1rem
			.title5
				position: absolute
				top: 0.5rem
				right: 1.5rem
				font-size: 0.4rem
				color: #ff8d19 
			.title6
				width: 100%
				position: absolute
				.header-button
					right:1.24rem
					top: 0.4rem 
					width: 1.5rem
					position: absolute
					font-size: 0.4rem
					text-align: center
					background: linear-gradient(-225deg,#ff8d19 0,#ffbf4f 100%) !important
					line-height: .6rem
					border-radius: 5px
					color: #fff
	.yh
		position: absolute
		width: 100%
		.shu
			position: absolute
			color: #00bcd4
			padding-buttom: 0.2rem
			padding-top: 0.2rem
			border-top:1px solid #EBEBEB
			border-bottom:1px solid #EBEBEB
		.ttt
			position: absolute
			color: #000	
			width: 100%	
			font-size: 0.3rem
			border-top:1px solid #EBEBEB
			border-bottom:1px solid #EBEBEB
			padding-bottom: 0.2rem
			padding-top: 0.2rem
			left: 0.5rem
		.lei
			position: absolute
			top: 1rem
			font-size: 2rem
</style>