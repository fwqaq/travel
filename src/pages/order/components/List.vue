<template>
	<div class="header">
		<div class="header-font1" @click="handleClick1" :style="{'background':this.str}" :key=this.str>全部</div>
		<div class="header-font2" @click="handleClick2" :style="{'background':this.str1}" :key=this.str1>待出行</div>
		<div class="header-font3" @click="handleClick3" :style="{'background':this.str2}" :key=this.str2>待支付</div>
		<div class="header-font4" @click="handleClick4" :style="{'background':this.str3}" :key=this.str3>退款单</div>

	</div>
</template>

<script>
	export default{
		name: 'OrderList',
		data () {
			return {
				str: '#00bcd4',
				str1: '#fff',
				str2: '#fff',
				str3:"#fff",
			}
		},
		methods: {
			handleClick1 () {
				this.str = '#00bcd4',
    		    this.str1 = '#fff',
     		 	this.str2 = '#fff',
     		 	this.str3 = '#fff'
			},
			handleClick2 () {
				this.str = '#fff',
    		    this.str1 = '#00bcd4',
     		 	this.str2 = '#fff',
     		 	this.str3 = '#fff'
			},
			handleClick3 () {
				this.str = '#fff',
    		    this.str1 = '#fff',
     		 	this.str2 = '#00bcd4',
     		 	this.str3 = '#fff'
			},
			handleClick4 () {
				this.str = '#fff',
    		    this.str1 = '#fff',
     		 	this.str2 = '#fff',
     		 	this.str3 = '#00bcd4'
			}
		}
}
</script>

<style lang="stylus" scoped>
	.header
		position: fixed
		top: 1rem
		width: 100%
		color: #666666
		background: #ddd
		.header-font1
			position: absolute
			height: 0.5rem
			left: 0.2rem
			border-left: 5px solid #E8E8E8
			width: 1.2rem
			border-right: 5px solid #E8E8E8
			border-bottom: 2px solid #E8E8E8
			text-align: center
			line-height: 0.5rem
		.header-font2
			position: absolute
			height: 0.5rem
			line-height: 0.5rem
			width: 1.2rem
			left: 2rem
			border-bottom: 2px solid #E8E8E8
			border-left: 5px solid #E8E8E8
			border-right: 5px  solid #E8E8E8
			text-align: center

		.header-font3
			position: absolute
			height: 0.5rem
			line-height: 0.5rem
			left: 4rem
			width: 1.2rem
			border-bottom: 2px solid #E8E8E8
			border-left: 5px solid #E8E8E8
			border-right: 5px  solid #E8E8E8
			text-align: center

		.header-font4
			position: absolute
			border-bottom: 2px solid #E8E8E8
			line-height: 0.5rem
			height: 0.5rem
			text-align: center
			border-left: 5px solid #E8E8E8
			border-right: 5px  solid #E8E8E8
			right: 0.4rem
			width: 1.2rem
</style>