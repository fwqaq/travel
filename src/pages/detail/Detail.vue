<template>
	<div>
		<detail-banner 
			:sightName="sightName"
			:bannerImg="bannerImg"
			:bannerImgs="bannerImgs"
		>
		</detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
	export default {
		name: 'Detail',//递归组件会使用到
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
				sightName: '',
				bannerImg: '',
				bannerImgs: [],
				list: [],
			}
		},
		methods: {
			getDetailInfo () {
				axios.get('/api/detail.json',{
					params: {
						id: this.$route.params.id
					}
				}).then(this.handleGetDataSucc)
			},
			handleGetDataSucc (res) {
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					console.log(data)
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.bannerImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		mounted () {
			this.getDetailInfo()
		},
		//activated生命周期钩子，每次刷新页面都会发起一个请求 
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>