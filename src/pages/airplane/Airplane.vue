<template>
	<div>
		<airplane-header></airplane-header>
		<air-money></air-money>
		<air-lose></air-lose>
	</div>
</template>

<script >
import AirplaneHeader from './components/Header'
import AirMoney from './components/Money'
import AirLose from './components/Lose'
	export default{
		name: 'Airplane',
		components: {
			AirplaneHeader,
			AirMoney,
			AirLose
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>