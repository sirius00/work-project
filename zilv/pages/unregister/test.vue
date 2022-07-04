<template>
	<!-- 顶部选项卡 -->
	<view class="tabs">
		<view 
			class="uni-tab-item" 
			v-for="(tab,index) in tabBars"
			:key="tab.id"
		>
			<text 
				class="uni-tab-item-title"
				:class="{tabActive: tabIndex==tab.id}"
				@tap="tarTap(tab)"
			>
				{{tab.name}}
				<span class="tab-item-title-line"></span>
				
			</text>
		</view>
	</view>
</template>
 
<script>
	export default {
		name: "index-tabbar",
		props:{
			tabBars: Array,
			tabIndex: String
		},
		data(){
			return {
				
			}
		},
		methods:{
			tarTap(item){
				this.$emit("TarTap",item)
			}
		}
	}
</script>
 
<style>
	.tabs{
		display: flex;
		flex: 1;
		flex-direction: row;
		overflow-x: scroll;
		height: 100%;
	}
	.uni-tab-item{
		width: 100%;
		white-space: nowrap;
		line-height: 100rpx;
		height: 100rpx;
		border-bottom: 1px solid #eee;
	}
	.uni-tab-item-title{
		color: #969696;
		font-weight: bold;
		font-size: 38rpx;
		width: 150rpx;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	.tabActive{
		color: #343434;
	}
	.tabActive .tab-item-title-line{
		display: block;
		border-bottom: 4rpx solid #fede33;
		border-top: 4rpx solid #fede33;
		width: 86rpx;
		margin: 0 auto;
		border-radius: 40rpx;
		margin-top: -10px;
		background-color: #FEDE33;
		box-sizing: border-box;
	}
</style>