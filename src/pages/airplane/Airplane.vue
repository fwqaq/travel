<template>
	<div class="header">
		<airplane-header></airplane-header>
		<air-money></air-money>
		<air-lose></air-lose>
		<airplane-detail></airplane-detail>
		<airplane-hot :list="hotair"></airplane-hot>
	</div>
</template>

<script >
import AirplaneHeader from './components/Header'
import AirMoney from './components/Money'
import AirLose from './components/Lose'
import AirplaneDetail from './components/Detail'
import AirplaneHot from './components/Hot'
import axios from 'axios'
	export default{
		name: 'Airplane',
		components: {
			AirplaneHeader,
			AirMoney,
			AirLose,
			AirplaneDetail,
			AirplaneHot

		},
		data () {
			return {
				hotair: []
			}
		},
		methods: {
			getCityInfo () {
				axios.get('/api/air.json')
					.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc (res) {
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.hotair = data.hotair
					console.log(data)
				}
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped>
</style>
