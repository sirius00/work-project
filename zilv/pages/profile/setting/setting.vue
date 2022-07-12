<template>
	<view class="board">
		<view class="cancel">
			注销账号
		</view>
		<view class="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.board {
		height: 100vh;
		width: 100vw;
		background-color: aliceblue;
	}
	.cancel {
		background-color: #c8c3a5;
		width: 95vw;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 16px;
		text-align: center;
		margin: 3rem auto;
		border-radius: 10px;
	}
	.logout {
		color: aliceblue;
		background-color: #131310;
		width: 10rem;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		margin: 4rem auto;
		border-radius: 10px;
		
	}
</style>
