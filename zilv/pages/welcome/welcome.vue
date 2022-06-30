<template>
	<view class="background">
		<view class="welcome_img">
			<welcome-logo></welcome-logo>
		</view>
		<view class="welcome_title">
			<h2 class="size">自律 = 自由</h2>
		</view>
		<view>
			<navigator url="/pages/login/phone_direct" open-type="switchTab">
				<button-one>进入自律的世界</button-one>
			</navigator>

		</view>
	</view>
</template>

<script>
	import welcomeLogo from "../../components/welcome_logo.vue"
	import buttonOne from "../../components/button_one.vue"
	export default {
		components: {
			welcomeLogo,
			buttonOne
		},
		methods: {

		}
	}
</script>

<style scoped>
	.background {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
  }
	.welcome_img {
		width: 14rem;
		margin-left: 6rem;
	}
	.welcome_title {
		text-align: center;
	}
	.size {
		font-size: 2.6rem;
		font-weight: 700;
	}
</style>
