<template>
	<view class="content">
		<view>
			<view class="index-bg"></view>
			<img src="../../static/img/welcome.png" alt="">
		</view>
		<view class="index-input">
			<h2 class="size">自律 = 自由</h2>
		</view>
		<view >
			<navigator url="/pages/user/phone_direct_log">
				<button class="zl_button">进入自律的世界</button>
			</navigator>
		</view>
	</view>
</template>

<script>

export default {
	methods: {

	}
}
</script>

<style scoped>
.index-input {
	text-align: center;
}
.size {
	font-size: 2rem;
}
</style>
