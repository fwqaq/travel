<template>
	<div class="wrapper">
		<div class="header">
			<router-link to="/">
				<div class="iconfont back-icon">&#xe624;</div>
			</router-link>
			<div class="font1">
				酒店
			</div>
			<div class="iconfont right-icon">&#xe605;客服</div>
		</div>
		<swiper :options="swiperOption" v-if="showSwiper">
	    <!-- slides -->
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl"/>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name: 'WinshopHeader',
		props: {
			list: Array
		},
		data:function () {
			return {
				swiperOption: {
					initialSlide: 0,
					loop: true,
					autoplay: true,
					speed: 10000,
         			paginationClickable: true,
         			mousewheelControl: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}
				}
			}
		},
		computed: {
			showSwiper () {
				return this.list.length
			}
		}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		width: 100%
		height: 7rem
		background: #eee
		position: absolute
		.header
			position: fixed
			width: 100%
			height: 0.6rem
			z-index: 999
			background: #00bcd4
			.back-icon
				position: absolute
				font-size: .24rem 
				overflow: hidden
				top: 0
				margin: 0.1rem
				color: #fff
				font-size: 0.4rem
				font-weight: bold
			.font1
				position: absolute
				color: #fff
				margin: 0.15rem
				left: 3.2rem
				font-size: 0.3rem
			.right-icon
				font-size: .28rem
				color: #fff
				position: fixed
				z-index: 999
				top: 0.15rem
				right: .05rem
		.swiper-img
			width: 100%
			height: 7rem
</style>