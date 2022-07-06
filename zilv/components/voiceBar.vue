<template>
<view>
  <view class="voice_bar">
    <view class="voice_toux">
      <img src="/static/img/wink-smile.png" alt="">
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
  width: 15rem;
  height: 2rem;
  border-radius: 20px;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
	min-width: 7rem;
}
.voice_toux img{
  height: 2rem;
  width: 2rem;
}
.voice_content {
  height: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% - 5rem)
}
.voice_content img {
  height: 1.2rem;
  width: 1.2rem;
	margin-left: 8rem;
}
.play_button img {
  height: 2rem;
  width: 2rem;
}
</style>
