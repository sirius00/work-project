<template>
	<view class="content">
		<view class="other-login">
			<navigator url="/pages/user/email_reg">其他登录方式</navigator>
		</view>
		<view class="index-text">
			<h4>手机号登录</h4>
		</view>
		<view>
			<view class="index-bg"></view>
			<img src="../../static/img/welcome.png" alt="">
		</view>
		<view class="index-input input-account">
			<view class="conutry">
				<view class="country_ch">
					CN
				</view>
				<view class="country_ch ">
					+86
				</view>
			</view>
			<view class="phone_ip">
				<input type="text" placeholder="手机号码" class="phone_ip_ip">
			</view>
		</view>
		<view class="index-input input-account">
			<view class="input-code-sp">
				<view class="phone_ip">
					<input type="text" placeholder="输入验证码" class="code_ip_ip">
				</view>
			</view>
			<view class="catch-code-sp">
				<text>获取验证码</text>
			</view>
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
		<view >
			<navigator url="/pages/user/reg_profile">
				<button class="zl_button">登录</button>
			</navigator>
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

</style>
