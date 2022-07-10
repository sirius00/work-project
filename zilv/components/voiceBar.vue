<template>
<view>
  <view class="voice_bar">
    <view class="voice_toux">
      <img src="/static/机器猫(1).png" alt="">
    </view>
    <view class="voice_content">
      <img src="/static/img/Voice.png" alt="" v-if="!playVoice">
			<view class="box" v-if="playVoice">
				<view class="yinjie one"></view>
				<view class="yinjie two"></view>
				<view class="yinjie three"></view>
				<view class="yinjie four"></view>
				<view class="yinjie five"></view>
				<view class="yinjie six"></view>
				<view class="yinjie seven"></view>
				<view class="yinjie eight"></view>
				<view class="yinjie nine"></view>
				<view class="yinjie ten"></view>
				<view class="yinjie ten"></view>
				<view class="yinjie nine"></view>
				<view class="yinjie eight"></view>
				<view class="yinjie seven"></view>
				<view class="yinjie six"></view>
				<view class="yinjie five"></view>
				<view class="yinjie four"></view>
				<view class="yinjie three"></view>
				<view class="yinjie two"></view>
				<view class="yinjie one"></view>
			</view>
    </view>
    <view class="play_button">
			<img src="/static/img/playCircle.png" alt="" @click="play" v-if="!playBt">
			<img src="/static/img/zanting.png" alt="" @click="play" v-if="playBt">
    </view>
  </view>
</view>
</template>

<script>
import voicePlay from "@/components/voicePlay.vue"
export default {
  components:{
    voicePlay
  },
   data() {
      return {
				playVoice: false,
        playBt: false
      }
   },
   computed:{
   },
   methods:{
    play() {
      this.playBt = !this.playBt
			this.playVoice = !this.playVoice
    }
   },
}
</script>

<style>
	/*  音阶部分 */
	.box {
		/* background-color: aquamarine; */
		width: 100%;
		height: 100%;
		display: flex;
		/* flex-flow: row nowrap; */
		align-items: center;
		justify-content: space-evenly;
	}
	.yinjie {
		width: 5rpx;
		height: 60rpx;
		background-color: #fff;
		border-radius: 10px;
	}
	@keyframes yy{
		0% {
			transform: scale(1,1);
			background-color: rgb(255, 255, 255);
		}
		100% {
			transform: scale(1,0.2);
			background-color: rgb(255, 255, 255);
		}
	}
	.one{
		animation: yy 0.5s 2s linear infinite alternate;
	}
	.two{
		animation: yy 0.5s 1.8s linear infinite alternate;
	}
	.three{
		animation: yy 0.5s 1.6s linear infinite alternate;
	}
	.four{
		animation: yy 0.5s 1.4s linear infinite alternate;
	}
	.five{
		animation: yy 0.5s 1.2s linear infinite alternate;
	}
	.six{
		animation: yy 0.5s 1s linear infinite alternate;
	}
	.seven{
		animation: yy 0.5 0.8s  linear infinite alternate;
	}
	.eight{
		animation: yy 0.5s 0.6s linear infinite alternate;
	}
	.nine{
		animation: yy 0.5s 0.4s linear infinite alternate;
	}
	.ten{
		animation: yy 0.5s 0.2s linear infinite alternate;
	}
	
	.voice_bar{
		margin-top: 1.5rem;
		background-color: coral;
		width: 10rem;
		height: 2.2rem;
		border-radius: 20px;
		padding: 0.4rem;
		display: flex;
		justify-content: space-between;
		min-width: 9rem;
	}
	.voice_toux img{
		height: 65rpx;
		width: 65rpx;
		border-radius: 30rpx;
	}
	.voice_content {
		height: 65rpx;
		line-height: 65rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-basis: calc(100% - 5rem);
	}
	.voice_content img {
		height: 45rpx;
		width: 45rpx;
		margin-right: 10rpx;
	}

	.play_button img {
		height: 65rpx;
		width: 65rpx;
	}
</style>
