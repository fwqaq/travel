<!-- App.vue是一个根组件 -->
<template>
  <div id="app">
  	<keep-alive>
<!--   		//keepalive的意思就是我的路由已经加载一次的时候就
  		放入在内存当中，下一次直接从内存中取出，不会再渲染这个组件 -->
  	  <router-view/>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
