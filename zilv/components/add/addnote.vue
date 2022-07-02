<template>
	<view>
		<view class="add_note">
			<view class="">
				<textarea name="" id="" placeholder="添加事项..." class="addtext"></textarea>
			</view>
			<view class="limit">
				<view class="">
					<img src="../../static/img/limit.png" alt="" v-if="!limited" @click="limit">
					<img src="../../static/img/limited.png" alt="" v-else @click="limit">
				</view>
				<view>
					仅自己可见
				</view>
				
			</view>
			<view class="add_button">
				添加
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				limited: false
			}
		},
		methods: {
			limit() {
				this.limited = !this.limited
			}
		}
	}
</script>

<style scoped >
	.add_note {
		width: 500rpx;
		height: 480rpx;
		background-color: #fff;
		position: absolute;
		z-index: 10;
		top: 300rpx;
		left: 125rpx;
		border-radius: 15px;
		box-shadow: 0 0 1px 1px rgb(136, 136, 136, 0.2);
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-evenly;
	}

	.addtext {
		/* background-color: aquamarine; */
		padding: 20rpx;
		height: 200rpx;
		width: 400rpx;
	}

	.limit {
		align-self: flex-start;
		margin-left: 50rpx;
		display: flex;
		flex-flow: row nowrap;
		 align-items: center;
		 
	}
	.limit img {
			height: 40rpx;
			width: 40rpx;
			margin-right: 10rpx;
			margin-top: 4rpx;
		}

	.add_button {
		width: 200rpx;
		height: 80rpx;
		background-color: #46c4ba;
		color: #fff;
		line-height: 80rpx;
		border-radius: 13px;
		text-align: center;
	}
</style>
