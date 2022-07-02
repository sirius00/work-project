<template>
	<view class="topbar">
		<slot>
			<tab-item>推荐</tab-item>
		</slot>
		<slot>
			<tab-item>我的时间卡</tab-item>
		</slot>

		<slot>

		</slot>
		
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