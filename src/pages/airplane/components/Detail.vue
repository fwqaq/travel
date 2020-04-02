<template>
	<div class="header">
		<div class="font">
			<div class="font1">丨</div>
			<div class="font2">超值低价</div>
			<div class="font3">(可选择出行假期)</div>
		</div>
		<div class="icon">
			<div class="holiday">   
				<div class="holiday-item1"> 
					<img src="https://f-flightfe-portalcp.qunarzz.com/f_flightfe_portal_f_flightfe_portal/2019/1554103151828_26644692.png" class="img">
					<p class="name">清明假期</p> 
					<p class="date">04.04~04.06</p> 
				</div>    
				<div class="holiday-item2"> 
					<img src="https://f-flightfe-portalcp.qunarzz.com/f_flightfe_portal_f_flightfe_portal/2019/1554258914134_03512711.png" class="img">
					<p class="name">五一假期</p> 
					<p class="date">05.01~05.05</p> 
				</div>    
				<div class="holiday-item3"> 
					<img src="https://s.qunarzz.com/f_cms/2020/1584949624238_3538794.png" class="img">
					<p class="name">四月出游</p> 
					<p class="date">04.01~04.30</p>
				</div>   
			</div>
		</div>
	</div>
</template>

<script >
	export default{
		name: 'AirplaneDetail',
	}
</script>

<style lang="stylus" scoped>
	.header
		position: absolute
		top: 9.8rem
		width: 100%
		background: #fff
		.font
			position: absolute
			width: 100%
			height: 1rem
			.font1
				position: absolute
				left: 0rem
				color: #02C0E0
				top: 0rem
				font-size: 0.7rem
			.font2
				position: absolute
				left: 0.6rem
				top: 0.1rem
				font-size: 0.5rem
			.font3
				position:absolute
				left: 2.8rem
				top: 0.35rem
				color: #aaa
		.icon
			position: absolute
			width: 100%
			background: #eee
			top: 1rem
			.holiday
				position: absolute
				top: 0rem
				width: 100%
				.holiday-item1
					left: 0.1rem
					position: absolute
					box-sizing: border-box
					width: 2.3rem
					height: 44px
					border-radius: 4px
					box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16)
				.holiday-item2
					left: 2.6rem
					position: absolute
					position: absolute
					box-sizing: border-box
					width: 2.3rem
					height: 44px
					border-radius: 4px
					box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16)
				.holiday-item3
					right: 0.1rem
					position: absolute
					position: absolute
					box-sizing: border-box
					width: 2.3rem
					height: 44px
					border-radius: 4px
					box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16)
				.name
					font-size: 0.3rem
					margin-top: 0.1rem
				.date
					font-size: 0.1rem
					margin-top: 0.2rem
				.img
					position: absolute
					right: 0
					top: 0rem
					height: 0.8rem
					width: 0.8rem

</style>