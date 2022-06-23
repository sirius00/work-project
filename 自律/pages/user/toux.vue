<template>
	<view class="content bgcolor">
		<view class="index-input">
			<h1>真实形象照</h1><br>
			<text>形象越优质越容易接触到优质用户</text>
		</view>

		<view class="up_img">
			<img src="../../static/img/Add.png" alt="" @click="upImage" v-if="!flag" class="up_img_log">
			<img :src="toux" alt="无法显示" v-if="flag" @click="changeImage" class="toux">
		</view>
		<view class="index">
			<navigator url="/pages/home/home">
				<button class="zl_button">最后一步了</button>
			</navigator>
		</view>
		<view class="register_guide">
			<img src="../../static/img/register_image_guide_en.png" alt="">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toux: null,
				flag: false
			}
		},
		methods: {
			upImage() {
				uni.chooseImage({
					count:6,
					success: res => {
							console.log('上传成功')
							console.log(res.tempFilePaths);
							this.flag = !this.flag
							this.toux = res.tempFilePaths
					}
				})
			},
			changeImage() {
				uni.chooseImage({
					count:6,
					success: res => {
							this.toux = res.tempFilePaths
					}
				})
			},
		}
	}
</script>

<style scoped>

</style>
