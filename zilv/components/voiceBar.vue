<template>
<view>
  <view class="voice_bar">
    <view class="voice_toux">
      <img src="/static/机器猫(1).png" alt="">
    </view>
    <view class="voice_content">
      <img src="/static/img/Voice.png" alt="" v-if="playVoice">

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
				playVoice: true,
        playBt: false
      }
   },
   computed:{
   },
   methods:{
    play() {
      this.playBt = !this.playBt
			
    }
   },
}
</script>

<style>
.voice_bar{
  margin-top: 1.5rem;
  background-color: coral;
  width: 10rem;
  height: 2.2rem;
  border-radius: 20px;
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  min-width: 7rem;
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
