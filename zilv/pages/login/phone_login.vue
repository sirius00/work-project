<template>
	<view class="background">
		<view class="other-login">
			<navigator url="/pages/login/email_login">其他登录方式</navigator>
		</view>
		<view >
			<h4>手机号登录</h4>
		</view>
		<view>
			<welcome-logo ></welcome-logo>
		</view>
		<input-area>
			<view class="conutry">
				<view class="country_ch">
					CN
				</view>
				<view class="country_ch ">
					+86
				</view>
			</view>
			<view class="phone_nmber">
				<input type="text" placeholder="手机号码" class="phone_input">
			</view>
		</input-area>
		<input-area>
			<view class="input_code_sp">
				<view class="phone_number">
					<input type="text" placeholder="输入验证码" class="code_ip_ip">
				</view>
			</view>
			<view class="catch_code_sp">
				<text>获取验证码</text>
			</view>
		</input-area>
		<agruement></agruement>
		<view >
			<navigator url="/pages/login/add_profile">
				<button-two>登录</button-two>
			</navigator>
		</view>
	</view>
</template>

<script>
	import welcomeLogo from "../../components/welcome_logo.vue"
	import inputArea from "@/components/inputArea.vue"
	import agruement from "@/components/agruement.vue"
	import buttonTwo from "@/components/buttonTwo.vue"
	export default {
		components: {
			welcomeLogo,
			inputArea,
			agruement,
			buttonTwo
		},
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
	.background {
			height: 100vh;
			display: flex;
			flex-flow: column ; 
			justify-content: space-around;
			align-items: center;
	}
	/* 其他登录方式 */
	.other-login {
		/* text-align: center; */
		font-size: 12px;
		align-self: flex-end;
		margin-right: 1.5rem;
	}
	/* 国家 */
	.conutry {
		display: flex;
		justify-content: space-evenly;
		flex: 1;
	}
	.country_ch {
		text-align: center;
		color: #afb3b3;
	}
	.phone_number {
		flex-basis: 14rem;
	}
	.phone_input {
		height: 3rem;
		line-height: 3rem;
	}
	/* 输入验证码 */
	.input_code_sp {
		flex-basis: 15rem;
		
	}
	.code_ip_ip {
		height: 3rem;
		line-height: 3rem;
		padding-left: 2rem;
	}
	/* 获取验证码 */
	.catch_code_sp {
		margin-left: 0.7rem;
	}
</style>
