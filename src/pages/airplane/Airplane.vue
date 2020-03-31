<template>
	<div>
		<airplane-header></airplane-header>
		<air-money></air-money>
	</div>
</template>

<script >
import AirplaneHeader from './components/Header'
import AirMoney from './components/Money'
	export default{
		name: 'Airplane',
		components: {
			AirplaneHeader,
			AirMoney
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>