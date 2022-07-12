<template>
	<view class="container">
		<view class="toux">
			<view class="toux_box">
				<img :src="toux" alt="" @click="changeImage()">
			</view>
			
		</view>
		<view class="username">
			<text>小泡芙</text>
		</view>
		<view class="userprofile">
			<view class="logo">
				<img src="../../static/img/profile_active.png" alt="">
			</view>
			<view class="tx">
				<text>个人信息</text>
			</view>
		</view>
		<view class="userprofile">
			<view class="logo">
				<img src="../../static/img/profile_active.png" alt="">
			</view>
			<navigator url="/pages/profile/setting/setting" open-type="navigate">
				<view class="tx">
					<text>设置</text>
				</view>
			</navigator>
			
		</view>
		<view class="userprofile">
			<view class="logo">
				<img src="../../static/img/profile_active.png" alt="">
			</view>
			<view class="tx">
				<text>随机任务</text>
			</view>
		</view>
		
		<mid-box :current-page="2"></mid-box>
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
				toux: "../../static/机器猫(1).png"
			}
		},
		methods: {
			changeImage() {
				uni.chooseImage({
					count: 1,
					success: res => {
						this.toux = res.tempFilePaths
					}
				})
			},
		}
	}
</script>

<style>
	.container {
		background-color: #fff03b;
		height: 100vh;
		display: flex;
		flex-flow: column nowrap; 
	}
	.toux {
		height: 250rpx;
		text-align: center;
		margin-top: 2rem;
	}
	.toux .toux_box {
		height: 250rpx;
		width: 250rpx;
		margin: 0 auto;
		border-radius: 150rpx;
		background-color: #fff;
	}
	.toux img {
		height: 250rpx;
		width: 250rpx;
		border-radius: 150rpx;
	}

	.username {
		text-align: center;
		margin-top: 0.6rem;
	}
	.userprofile {
		margin: 0.5rem auto;
		display: flex;
		justify-content: flex-start;
		background-color: #eaeaea;
		width: 94vw;
		height: 2.7rem;
		border-radius: 10px;
		align-items: center;
	}
	.logo {
		margin-left: 0.5rem;
	}
	.logo img{
		height: 40rpx;
		width: 40rpx;
	}
	.tx {
		margin-left: 0.3rem;
	}
</style>
