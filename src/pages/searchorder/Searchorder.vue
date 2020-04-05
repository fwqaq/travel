<template>
	<div>
		<searchorder-header></searchorder-header>
		<searchorder-detail></searchorder-detail>
	</div>
</template>

<script>
import SearchorderHeader from './components/Header'
import SearchorderDetail from './components/Detail'
	export default{
		name: 'Searchorder',
		components: {
			SearchorderHeader,
			SearchorderDetail
		}
}
</script>

<style lang="stylus" scoped>

</style>