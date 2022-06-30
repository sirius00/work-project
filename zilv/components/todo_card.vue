<template>
	<view class="todo_card">
		<img src="../static/img/checkbox_unchecked.png" v-if="check" @click="chencBox">
		<img src="../static/img/checked.png" v-if="!check" @click="chencBox">
		<text>测试文字测试撒打了卡久等啦看到啦凯撒的</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				check: true
			}
		},
		methods: {
			chencBox() {
				this.check = !this.check
			}
		}
	}
</script>

<style>
.todo_card {
	height: 3.5rem;
	width: 21rem;
	background-color: rgb(192, 169, 44);
	border-radius: 10px;
	margin-top: 0.8rem;
	display: flex;
	flex-flow:  row nowrap;
	align-items: center;
}
.todo_card img {
	height: 1.5rem;
	width: 1.5rem;
	padding-left: 0.5rem;
}
.todo_card text {
	
  display: block;
	width: 80%;
	height: 3.5rem;
	line-height: 3.5rem;
	font-size: 16px; 
  padding-left: 0.5rem; 
	overflow: hidden;
}
</style>