<template>
	<div class="header">
		<airplane-header></airplane-header>
		<air-money></air-money>
		<air-lose></air-lose>
<<<<<<< HEAD
<<<<<<< HEAD
=======
		<airplane-detail></airplane-detail>
>>>>>>> air
=======
		<airplane-detail></airplane-detail>
		<airplane-hot :list="hotair"></airplane-hot>
>>>>>>> air
	</div>
</template>

<script >
import AirplaneHeader from './components/Header'
import AirMoney from './components/Money'
import AirLose from './components/Lose'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import AirplaneDetail from './components/Detail'
>>>>>>> air
=======
import AirplaneDetail from './components/Detail'
import AirplaneHot from './components/Hot'
import axios from 'axios'
>>>>>>> air
	export default{
		name: 'Airplane',
		components: {
			AirplaneHeader,
			AirMoney,
<<<<<<< HEAD
<<<<<<< HEAD
			AirLose
=======
			AirLose,
			AirplaneDetail

>>>>>>> air
=======
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
>>>>>>> air
		}
	}
</script>

<style lang="stylus" scoped>
</style>
