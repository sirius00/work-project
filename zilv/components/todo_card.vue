<template>
	<view >
		<uni-swipe-action >
			<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id"
				@click="swipeClick($event, index)" >
				<view class="content_box">
<!-- 					<view class="todo_card">
						<image class="todo_card_image" src="../static/img/checkbox_unchecked.png" mode="" v-if="check" @click="chencBox"></image>
						<image class="todo_card_image" src="../static/img/checked.png" mode="" v-if="!check" @click="chencBox"></image>
						<view >
							<input 
							type="text" class="edit" 
							:value="card.content" 
							@blur="check_content(card)" 
							@input="onKey_taskcontent"
							>
						</view> -->
						
					<view class="voice_bar" :style="'background-color:' + style" >
						<view class="voice_toux">
							<image class="todo_card_image" src="../static/img/checkbox_unchecked.png" mode="" v-if="check" @click="chencBox"></image>
							<image class="todo_card_image" src="../static/img/checked.png" mode="" v-if="!check" @click="chencBox"></image>
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
						<view class="play_button" >
							<img src="/static/img/playCircle.png" alt=""  @click="play()" v-if="!playBt">
							<img src="/static/img/zanting.png" alt="" @click="play" v-if="playBt">
						</view>
					</view>

				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<!-- <view class="tianchong"></view> -->
	</view>
</template>

<script>
	import voicePlay from "@/components/voicePlay.vue"
	export default {
		components: {
			voicePlay
		},
		props:{
		// 用户 task_item
			card: {
				type: Object
			}
		},
		data() {
			return {
				playVoice: false,
				playBt: false,
				check: true,
				swipeList: [{
					id: 0,
					options: [{
						text: '删除',
						isImage: true,
						src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaEPtWe1twkAMtW8B6CbdoHQDNqEjtBOxAmzULpCrQoNUkE7v7tkWTeX8dZ79PnJEwSorv3Tl/CUFPDpBUwK11r3UehCRZxHZEmJOovqhqicCe4HQAhbyR3bwDU71lRXBC5im2bUXFwEiZy1lx/SyCKjMwAbmU0t5Yvq5CdBShnrVaboxYBR/FTs09LdDVgJWfAqwOmjFwwTuBzAHzBPTOiPNM5ACPO2f37iNX7n/m8C9gV6HrhUM27/7PcAO6H2S2P4poNdhdN/DE0AErPWWAW6PkJUgwqcA5FB0PROIdhj1zwSQQ9H1TCDaYdQ/E0AORdczgWiHUf9MADkUXQ9PAH2woDoyIAWwDiHnr3W2v9sXWS/RP/O3ipUwwH9pKV07t5EEPFdKSH/3yqlfwM9G0meph+gPLP26Bcwzl83k27JW3SAeRP0squ8jG8shAQShcEgKCLcYDFh9At8m8aJA2BtS2AAAAABJRU5ErkJggg==',
						style: {
							backgroundColor: 'rgb(255,58,49)',
							imgWidth: '60rpx',
							imgHeight: '60rpx',
						}
					}],
				}, ],
				// 文本框中新输入的文本
				// new_taskcontent: ''
			}
		},
   computed:{
		 style() {
			 let R = Math.floor(Math.random() * 255);
			 let G = Math.floor(Math.random() * 255);
			 let B = Math.floor(Math.random() * 255);
			 return "rgb(" + R + "," + G + "," + B + ")";
		 },
   },
		methods: {
			play() {
			  this.playBt = !this.playBt
				this.playVoice = !this.playVoice
			},
			chencBox() {
				this.check = !this.check
			},
			swipeClick(e, index) {
				let {
					content
				} = e;
				if (content.text === '删除') {
					uni.showModal({
						title: '提示',
						content: '是否删除',
						success: res => {
							if (res.confirm) {
								this.swipeList.splice(index, 1);
							} else if (res.cancel) {
							}
						}
					});
				} 
			},
			// 获取新输入的文本
			onKey_taskcontent(e) {
				this.new_taskcontent = e.target.value
			},
			// 检测文本是否发生变化
			check_content(item) {				
				if (this.new_taskcontent != item.content) {
					this.$store.commit("changeTask", {id:item.id, content:this.new_taskcontent})
					if (this.new_taskcontent == '') {
						this.$store.commit("changeTask", {id:item.id, content:item.content})
					}
				}
			}
		}
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
		/* background-color: #d40079; */
		width: 10rem;
		height: 3rem;
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


	.todo_card {
		height: 3.5rem;
		width: 60vw;
		background-color: rgb(40, 217, 129);
		border-radius: 25px;
		display: flex;
		flex-flow:  row nowrap;
		align-items: center;
	}
	.todo_card_image {
		height: 1.8rem;
		width: 1.8rem;
		padding-left: 0.5rem;
	}

	.edit {
		width: 35vw;
		height: 3.5rem;
		padding-left: 0.5rem; 
	}

	.tianchong {
		height: 1.5rem;
		background-color: #fff;
	}


</style>