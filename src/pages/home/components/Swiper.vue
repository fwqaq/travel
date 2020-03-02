<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl"/>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name: 'HomeSwiper',
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
				},
				swiperList: [{
					id: '0001',
					imgUrl: "http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg"
				},{
					id: '0002',
					imgUrl: "http://img1.qunarzz.com/sight/source/1505/48/f5bc37dba8b542.jpg_r_640x214_d33cd232.jpg"
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		width: 100%
		height: 0
		overflow: hidden
		padding-bottom: 31.25%
		background: #eee
		.swiper-img
			width: 100%
</style>