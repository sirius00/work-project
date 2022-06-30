<template>
	<view class="topbar">
		<slot>
			<tab-item>推荐</tab-item>
		</slot>
		<slot>
			<tab-item>我的时间卡</tab-item>
		</slot>
		<slot>
			<!-- <tab-item>测试</tab-item> -->
		</slot>
		<!-- <tab-item v-for="item in top">{{item}}</tab-item> -->
	</view>
</template>

<script>
	import tabItem from "@/components/topTabbar/tabItem.vue"
	export default {
		components:{
			tabItem
		},
		name:"topTabbar",
		data() {
			return {
				top: ['推荐', '我的时间卡']
			};
		}
	}
</script>

<style scoped lang="scss">
	.topbar {
		height: 90rpx;
		// background-color: aquamarine;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
	}
</style>