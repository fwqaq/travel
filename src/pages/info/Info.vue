<template>
	<div>
		<info-header></info-header>
		<info-datu></info-datu>
		<info-money></info-money>
		<info-list></info-list>
		<info-detail></info-detail>
	</div>
</template>

<script >
import InfoHeader from "./components/Header"
import InfoDatu from "./components/Datu"
import InfoList from "./components/List"
import InfoMoney from "./components/Money"

import InfoDetail from "./components/Detail"
	export default{
		name:"Info",
		components: {
			InfoHeader,
			InfoDatu,
			InfoMoney,
			InfoList,
			InfoDetail
		}

	}
</script>

<style lang="stylus" scoped>
	
</style>