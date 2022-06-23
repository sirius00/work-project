<template>
	<view class="content">
		<view>
			<view class="index-bg"></view>
			<img src="../../static/img/welcome.png" alt="">
		</view>
		<view class=" shrink">
			<navigator url="">
				<button class="zl_button">本机号码一键登录</button>
			</navigator>
		</view>
		<view class="agruement-sp" >
			<view class="agree-sp" @click="agree">
				<img src="../../static/img/check.png" alt="" v-if="!flag">
				<img src="../../static/img/check-active.png" alt="" v-if="flag">
			</view>
			<view>
				<text>
					登录即表示您已同意 &laquo;用户协议&raquo;
				</text>				
			</view>
		</view>
		<view class="">
			<h4>
				<navigator url="/pages/user/phone_reg">验证码登录</navigator>
			</h4>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false
			}
		},
		methods: {
			agree() {
				this.flag = !this.flag
			}
		}
	}
</script>

<style scoped>
.shrink {
	flex-shrink: 0.5;
}
</style>
