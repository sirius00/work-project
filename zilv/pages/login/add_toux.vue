<template>
	<view class="background bgcolor">
		<view class="center">
			<h1>真实形象照</h1><br>
			<text>形象越优质越容易接触到优质用户</text>
		</view>
		<view class="choose_toux">
			<img src="../../static/img/Add.png" alt="" @click="upImage" v-if="!flag" class="up_img">
			<img :src="toux" alt="无法显示" v-if="flag" @click="changeImage" class="toux">
		</view>
		<view @click="uppLoadImage()">
			<button class="last">最后一步了</button>
			<!-- <navigator url="/pages/home/home" open-type="switchTab">
				<button class="last">最后一步了</button>
			</navigator> -->
		</view>
		<view class="register_guide">
			<img src="../../static/img/register_image_guide_en.png" alt="">
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				toux: null,
				flag: false
			}
		},
		computed: {
			...(['userinfo'])
		},
		methods: {
			upImage() {
				uni.chooseImage({
					count: 1,
					success: res => {
						this.flag = !this.flag
						this.toux = res.tempFilePaths
					}
				})
			},
			changeImage() {
				uni.chooseImage({
					count: 1,
					success: res => {
						this.toux = res.tempFilePaths
					}
				})
			},
			upLoadImage() {
				console.log(this.userinfo);
				
				uni.uploadFile({
					url: '/user/UploadImg',
					fileType: 'image',
					filePath: this.toux,
					name: 'file',
					success: ({ data, statusCode }) => {},
					fail: (error) => {
						console.log(error);
						
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.background {
		height: 100vh;
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		align-items: center;
	}
	.bgcolor {
		background: -webkit-linear-gradient(bottom, #1b6365, #38e1e5, #37e2e5);
	}
	.choose_toux {
		// width: 14rem;
		width: 420rpx;
		// height: 6rem;
		height: 200rpx;
		flex: 0.4 auto;
		background-color: #39afb1;
		border-radius: 15px;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
	.up_img {
		border-radius: 100rpx;
		width: 150rpx;
		height: 150rpx;
	}
	.toux {
		width: 100%;
		height: 100%;
		border-radius: 15px;
	}
	.last {
		width: 20rem;
	}
	.register_guide img {
		height: 150rpx;

	}
</style>
