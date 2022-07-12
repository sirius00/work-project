<template>
	<view>
		<view class="container">
			<view class="title">
				<text>Today' goal</text>
			</view>
			<view class="box">
				<view class="wave">
					<img src="../../static/img/Add_voice_btn.png" alt="">
				</view>
				<view class="logo">
					<img src="../../static/img/welcome.png" alt="">
				</view>
			</view>
		</view>
		<mid-box :current-page="0"></mid-box>
	</view>
</template>

<script>
	import midBox from "../../components/midBox/midBox.vue"
	export default {
		components: {
			midBox
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
	.container {
		/* background-color: #fff03b; */
		height: 100vh;
		display: flex;
		flex-flow: column nowrap; 
		justify-content: flex-start;
		align-items: center;
	}
	.title {
		height: 3rem;
		line-height: 3rem;
		font-size: 2rem;
		font-weight: 700;
	}
	.box {
		margin-top: 0.5rem;
		height: 700rpx;
		width: 650rpx;
		background-color: #f83daf;
		border-radius: 10px;
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		align-items: center;
	}
	.box .wave img {
		height: 150rpx;
		width: 150rpx;
		  margin-bottom: 2rem;
		  margin-left: 1rem;
	}
	.box .logo {
		align-self: flex-start;
	}
	.box .logo img {
		height: 200rpx;
		width: 200rpx;
	}
</style>
