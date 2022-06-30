<template>
	<view class="agruement_sp">
		<view class="agree_sp" @click="agree">
			<img src="../static/img/check.png" alt="" v-if="!flag">
			<img src="../static/img/check-active.png" alt="" v-if="flag">
		</view>
		<view>
			<text>
				登录即表示您已同意 &laquo;用户协议&raquo;
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "agruement",
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

<style lang="scss" scoped>
.agruement_sp {
	display: flex;
	flex-flow: row nowrap; 
	justify-content: center;
	align-items: center;
}
.agruement_sp text{
	line-height: 3rem;
}
.agree_sp img {
	width: 70rpx;
	height: 70rpx;
}
</style>
