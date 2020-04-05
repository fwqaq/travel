<template>
	<div>
		<order-header></order-header>
		<order-list></order-list>
		<order-detail></order-detail>
	</div>
</template>

<script>
import OrderHeader from './components/Header'
import OrderList from './components/List'
import OrderDetail from './components/Detail'

	export default{
		name: 'Order',
		components: {
			OrderHeader,
			OrderList,
			OrderDetail
		}
}
</script>

<style lang="stylus" scoped>

</style>