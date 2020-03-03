<template>
	<ul class="list">
		<li class="item" 
		v-for="item of letters" :key="item"
		@click="handleLetterClick"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
		:ref="item"
		>{{item}}
		</li>
	</ul>
</template>

<script >
	export default{
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		computed: {
			letters () {
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		data () {
			return {
				touchStatus: false
			}
		},
		methods: {
			handleLetterClick (e) {
				this.$emit('change',e.target.innerText)
			},
			handleTouchStart () {//开始点击事件监听
				this.touchStatus = true

			},
			handleTouchMove (e) {//点击移动事件监听
				if (this.touchStatus) {
					const startY = this.$refs['A'][0].offsetTop//获取元素到顶端的距离
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - startY) / 20)
					//当前位置的下标
					if(index >= 0 && index < this.letters.length){
						this.$emit('change',this.letters[index])
					}
				}
			},
			handleTouchEnd () {//点击结束事件监听
				this.touchStatus = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			text-align: center
			line-height: .4rem
			color: #00bcd4
</style>
