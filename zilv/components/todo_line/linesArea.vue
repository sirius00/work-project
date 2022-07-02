<template>
	<view class="lines">
		<line/>
		<line/>
		<line/>
		<line/>
	</view>
</template>

<script>
	import line from "@/components/todo_line/line.vue"
	export default {
		components:{
			line
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.lines {
		height: 55rpx;
		width: 80rpx;
		position: absolute;
		top: 16rpx;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		z-index: -5;
	}


</style>
