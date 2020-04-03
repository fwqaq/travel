<template>
	<div class="header">
		<div class="header-font">国内热门</div>
		<div class="header-list" v-for="item of list" :key="item.id">
			<div class="list1">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585905451277&di=2e39bd6f0ab50a3100f6da3bdcc90d01&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F503d269759ee3d6dda2a17b843166d224e4aded1.jpg" class="img">
				<div class="header-list-city">{{item.city1}}</div>
				<div class="header-list-date">{{item.date1}}</div>
				<div class="header-list-money">
					<p class="header-list-money-z">{{item.zhe1}}</p>
					<p>{{item.money1}}</p></div>
			<div class="list2">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585905451277&di=2e39bd6f0ab50a3100f6da3bdcc90d01&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F503d269759ee3d6dda2a17b843166d224e4aded1.jpg" class="img">
					<div class="header-list-city">{{item.city2}}</div>
					<div class="header-list-date">{{item.date2}}</div>
					<div class="header-list-money">
						<p class="header-list-money-z">{{item.zhe2}}</p>
						<p>{{item.money2}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="detail">
			<div class="iconfont">查看更多&#xe71e;</div>
		</div>
	</div>
</template>

<script >
	export default{
		name: 'AirplaneHot',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	.header
		background: #00bcd4
		width: 96%
		left: 2%
		position: absolute
		top: 12rem
		.header-font
			left: 0.1rem
			position: static
			width: 40%
			top: 0.1rem
			font-size: 0.5rem
			text-align: center
			background: linear-gradient(-225deg,#AB82FF,#B22222 100%) !important
			border-radius: 19px
			color: #fff
		.header-list
			position: static
			width: 100%
			left:0rem
			height: 2rem
			margin: 0.2rem
			.list1
				position: absolute
				width: 40%
				left: 0.5rem
				height: 2rem
				.img
					position: absolute
					height: 100%
					width: 100%
				.header-list-city
					position:absolute
					top: 0.2rem
					left: 0.2rem
					font-size: 0.3rem
					font-weight: bold
				.header-list-date
					position: absolute
					top: 1rem
					left: 0.2rem
					color: #999
				.header-list-money
					position: absolute
					top: 1.4rem
					right: 0.2rem
					color: #FF3030
					font-weight: bold
					.header-list-money-z
						top: 0.1rem
						font-size: 0.2rem
						background: #FFC125
						width: 100%
						height: 0.2rem
			.list2
				position: absolute
				width: 100%
				left: 3.5rem
				height: 2rem
				
		.detail
			position: static
			text-align: center
			margin-top: 0.25rem
			height: 1rem
			color: #fff
</style>
