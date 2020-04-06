<template>
	<div class="header">
		<div class="top">
			<router-link to="/" class="top">
			<div class="iconfont back1" >&#xe624;</div>
			</router-link>
			<div class="font-1">
				<div class="font-center" @click="handleClick">{{this.myorder}}</div>
					<div class="iconfont back2" v-show=!this.isshow>&#xe609;</div>
					<div class="iconfont back2" v-show=this.isshow>&#xe608;</div>
				
			</div>
				<router-link to="/searchorder">
					<div class="font-right">订单查询</div>
				</router-link>
		</div>
		<div class="detail" v-show=this.isshow>
			<table class="tab">
				<td>
					<div class="font-tab" :style="{'background':this.str1}" :key=this.str1 @click="handleClick1">全部</div>
					<div class="font-tab" :style="{'background':this.str2}" :key=this.str2 @click="handleClick2">机票</div>
					<div class="font-tab" :style="{'background':this.str3}" :key=this.str3 @click="handleClick3">酒店住宿</div>
					<div class="font-tab" :style="{'background':this.str4}" :key=this.str4 @click="handleClick4">全球购</div>
				</td>
				<td>
					<div class="font-tab" :style="{'background':this.str5}" :key=this.str5 @click="handleClick5">汽车票·船票</div>
					<div class="font-tab" :style="{'background':this.str6}" :key=this.str6 @click="handleClick6">火车票</div>
					<div class="font-tab" :style="{'background':this.str7}" :key=this.str7 @click="handleClick7">门票</div>
					<div class="font-tab" :style="{'background':this.str8}" :key=this.str8 @click="handleClick8">保险·车险</div>
				</td>
				<td>
					<div class="font-tab" :style="{'background':this.str9}" :key=this.str9 @click="handleClick9">专车·租车</div>
					<div class="font-tab" :style="{'background':this.str10}" :key=this.str10 @click="handleClick10">旅游度假团购</div>
					<div class="font-tab" :style="{'background':this.str11}" :key=this.str11 @click="handleClick11">签证</div>
					<div class="font-tab" :style="{'background':this.str12}" :key=this.str12 @click="handleClick12">惠玩当地</div>
				</td>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'OrderHeader',
		data () {
			return {
				isshow: false,
				myorder: "我的订单",
				str1: '#00bcd4',str2: '#fff',str3: '#fff',
				str4: '#fff',str5: '#fff',str6: '#fff',
				str7: '#fff',str8: '#fff',str9: '#fff',
				str10: '#fff',str11: '#fff',str12: '#fff',
			}
		},
		methods: {
			handleClick () {
				this.isshow = !this.isshow
			},
			handleClick1 () {
				this.isshow = !this.isshow
				this.myorder = "我的订单"
			},
			handleClick2 () {
				this.myorder = "机票"
				this.str1= '#fff',this.str2= '#00bcd4',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick3 () {
				this.myorder = "酒店住宿"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#00bcd4',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick4 () {
				this.myorder = "全球购"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#00bcd4',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick5 () {
				this.myorder = "汽车票·船票"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#00bcd4',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick6 () {
				this.myorder = "火车票"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#00bcd4',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick7 () {
				this.myorder = "门票"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#00bcd4',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick8 () {
				this.myorder = "保险·车险"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#00bcd4',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick9 () {
				this.myorder = "专车·租车"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#00bcd4',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#fff',
				this.isshow = !this.isshow
			},
			handleClick10 () {
				this.myorder = "旅游度假团购"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#00bcd4',this.str11= '#fff',this.str12= '#fff',this.isshow = !this.isshow
			},
			handleClick11 () {
				this.myorder = "签证"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#00bcd4',this.str12= '#fff',this.isshow = !this.isshow
			},
			handleClick12 () {
				this.myorder = "惠玩当地"
				this.str1= '#fff',this.str2= '#fff',this.str3= '#fff',
				this.str4= '#fff',this.str5= '#fff',this.str6= '#fff',
				this.str7= '#fff',this.str8= '#fff',this.str9= '#fff',
				this.str10= '#fff',this.str11= '#fff',this.str12= '#00bcd4',this.isshow = !this.isshow
			}
		}
}
</script>

<style lang="stylus" scoped>
	.top
		height: 0.8rem
		width: 100%
		position: fixed
		background: #fff
		border-bottom: 2px solid #E8E8E8
		color: #666666
		z-index: 999
		.back1
			position: absolute
			font-size: 0.4rem
			top: 0.2rem
			left: 0.3rem
			color: #000
			z-index: 999
		.font-1
			position: absolute
			left: 2.1rem
			top: 0.2rem
			z-index: 999
			width: 3rem
			text-align: right
			.font-center
				position: relative
				right: 0rem
				text-align: center
				font-size: 0.35rem
			.back2
				top: 0rem
				text-align: center
				margin-top: 0.05rem

		.font-right
			position: absolute
			right: 0.2rem
			top: 0.3rem
			z-index: 999
			font-size: 0.3rem
			color: #00bcd4
	.detail
		height: 13.4rem
		background: #D9D9D9
		z-index: 999
		.tab
			position: absolute
			height: 6rem
			background: #fff
			width: 100%
			top: 1.7rem
			.font-tab
				position: relative
				top: 0.2rem
				right: 0.2rem
				text-align: center
				margin-top: 0.6rem
				font-size: 0.33rem
				display: block;
				width: 2rem
				line-height: .35rem;
				margin: 0.3rem;
				border: 1px solid #d6d6d6;
				border-radius: .05rem;
				background-clip: padding-box !important;
				line-height: 0.5rem
</style>