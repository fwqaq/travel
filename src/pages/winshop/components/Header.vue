<template>
	<div class="wrapper">
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
		overflow: hidden
		background: #eee
		position: absolute
		z-index: -1
		.swiper-img
			width: 100%
			height: 7rem
</style>