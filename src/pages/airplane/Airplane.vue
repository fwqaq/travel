<template>
	<div class="header">
		<airplane-header></airplane-header>
		<air-money></air-money>
		<air-lose></air-lose>
		<airplane-detail></airplane-detail>
	</div>
</template>

<script >
import AirplaneHeader from './components/Header'
import AirMoney from './components/Money'
import AirLose from './components/Lose'
import AirplaneDetail from './components/Detail'
	export default{
		name: 'Airplane',
		components: {
			AirplaneHeader,
			AirMoney,
			AirLose,
			AirplaneDetail

		}
	}
</script>

<style lang="stylus" scoped>
</style>
