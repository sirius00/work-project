<template>
	<view class="background">
		
		<view class="other-login">
			<navigator url="/pages/user/email_reg">其他登录方式</navigator>
		</view>
		<view >
			<h4>邮箱登录</h4>
		</view>
		<view>
			<welcome-logo ></welcome-logo>
		</view>
		<input-area>
			<view class="input_code_sp">
				<view class="phone_ip">
					<input type="text" placeholder="输入邮箱" class="code_ip_ip">
				</view>
			</view>
			<view class="catch_code_sp">
				<text>获取验证码</text>
			</view>
		</input-area>
		<input-area>
			<view class="input_code_sp">
				<view class="phone_ip">
					<input type="text" placeholder="输入验证码" class="code_ip_ip">
				</view>
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
