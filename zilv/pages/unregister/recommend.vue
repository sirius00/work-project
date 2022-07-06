<template>
	<view>
		<view class="bgboard">
			<view class="board-border ">
				<view>
					<top-tabbar :tabBars="tabBars"  :tabIndex="tabIndex" ></top-tabbar >
				</view>
				<view class="week">
					<view v-for="item in weekDay" :key="index">
						{{ item }}
					</view>
				</view>
				<calendar />
				<view class="home_voice_bar">
					<scroll-view scroll-y="true"  class="scroll_view" >
						<voice-bar />

					</scroll-view>

				</view>
				<view class="text">
					<text>TODO</text>
				</view>
			</view>
		</view>

		<view class="board-welcome">
			<img src="../../static/img/welcome.png" alt="">
		</view>
	</view>
</template>

<script>
	import topTabbar from "@/components/topTabbar/topTabbar.vue"
	import voiceBar from "@/components/voiceBar.vue"
	import calendar from "@/components/calendar.vue"

	export default {
		components: {
			topTabbar,
			calendar,
			voiceBar,
		},
		data() {
			return {
				weekDay: [ "一", "二", "三", "四", "五", "六",'日'],
				tabIndex: "tuijian",
				tabBars: [
					{
						name: "推荐",
						id: "tuijian",
						path: './recommend'
					},
					{
						name: "我的时间卡",
						id: "timecard",
						path: "./timecard"
					}
				],
				recommendList:[],
			}
		},
		onLoad() {
			// 获取推荐用户数据
			this.getRecommendList()
		},
		methods: {
			async getRecommendList() {
				const res = await uni.$http.post('/v2/user/push',{uid: 2})
				console.log(res);
			}
		}

	}
</script>

<style scoped>
	/* 背景板 */
	.bgboard {

		height: 80vh;
		width: 90vw;
		border: 6px solid rgb(10, 198, 185);
		border-radius: 35px;
		margin: 0.5rem auto;
	}

	/* 背景边框 */
	.board-border {
		height: 78vh;
		width: 85vw;

		border-radius: 35px;
		margin: 0.1rem auto;
	}

	/* 周日期 */
	.week {
		height: 2rem;
		line-height: 2rem;
		width: 100%;

		display: flex;
		justify-content: space-around;
		color: rgb(185, 186, 187);
	}

	.home_voice_bar {
		margin-top: 0.4rem;
		height: 70%;
		
	}
	.scroll_view {
		height: 100%;
		display: flex;
		flex-flow: column ;
		align-items: center;
		
	}

	.text {
		position: fixed;
		bottom: 250rpx;
		left: 240rpx;
		height: 5rem;
		width: 8rem;
		font-size: 3.5rem;
		font-weight: bolder;
		color: rgb(182, 188, 188);
		z-index: -2;
	}

	.board-welcome {

		position: absolute;
		bottom: 140rpx;
		left: 325rpx;
		/* z-index: -2; */
	}

	.board-welcome img {
		height: 4rem;
		width: 4rem;
		
	}
</style>
