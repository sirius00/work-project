<template>
	<view class="bgboard">
		
	
				<view class="week">
					<view v-for="item in weekDay" :key="index">
						{{ item }}
					</view>
				</view>
				<calendar />
				<view class="home_voice_bar">
					<scroll-view scroll-y="true"  class="scroll_view" >
						<voice-bar v-for="index of 7" :key="index" :style="'margin-left:' + style" class="bar"/>
					</scroll-view>
					
				</view>
				<view class="text" >
					<text>TODO</text>
				</view>
				

	</view>
</template>

<script>
	// 获取颜色

	
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
		computed: {
			style() {
				let x = Math.floor(Math.random()*10);
				return  x + "rem";
			}
		},
		onLoad() {
			// 获取推荐用户数据
			// this.getUserPush() 
			
		},
		methods: {
			// async getUserPush() {
			// 	const res = await uni.$http.post('/v2/user/push',{uid: 1})
			// 	console.log(res.data);
			// }
		}

	}
</script>

<style scoped>
	.bar {
		width: 10rem;
	}
	/* 背景板 */
	.bgboard {
		height: 80vh;
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
		font-size: 3.5rem;
		font-weight: bolder;
		color: rgb(182, 188, 188);
		text-align: center;
	}




</style>
