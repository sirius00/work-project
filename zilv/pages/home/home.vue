<template>
	<view class="container">
		<view class="board">
			<view class="board_border">
				<view class="category_title">
					<uni-segmented-control :current="current" :values="items.map((item) => { return item.title })"
						@clickItem="onClickItem()" styleType="text" activeColor="#0AC6B9" />
				</view>
				<view class="category_content">
					<view v-if="current === 0">
						<recommend></recommend>
					</view>
					<view v-if="current === 1">
						<time-card></time-card>
					</view>
				</view>
			</view>
		</view>

		<mid-box :current-page="1"></mid-box>
	</view>
</template>

<script>
// 引入分段器
import { uniSegmentedControl } from '@/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
import {
	mapState,
	mapMutations
} from "vuex"

import baseUrl from "@/network/baseUrlsConfigs.js"
const base2 = baseUrl.base2

import recommend from "../unregister/recommend.vue"
import timeCard from "../unregister/timecard.vue"
import midBox from "../../components/midBox/midBox.vue"
export default {
	components: {
		uniSegmentedControl,
		recommend,
		timeCard,
		midBox
	},

	data() {
		return {
			show: true,
			items: [
				{
					title: '推荐'
				},
				{
					title: '我的时间卡'
				}
			],
			current: 0
		}
	},
	computed: {
		...mapState(['daysList']),
	},
	onLoad(options) {
		this.getPush()
		// this.get_recommend()
	},
	methods: {
		// ...mapMutations([]),
		onClickItem(e) {
			if (this.current !== e.currentIndex) {
				this.current = e.currentIndex
			}
		},
		async getPush() {
			const res = await uni.$http.post(base2 + '/v2/user/push', { uid: 1 })
			// console.log(res);
			let days = res.data.data.day
			let num = 7
			for (let i = 0; i < 5; i ++) {
				this.daysList.push(days.splice(0, num))
			}
			// console.log(this.daysList);
		},
		// async get_recommend(time) {
		// 	const res = await uni.$http.post(base2 + '/task/wall/load', {date: '2022-07-16'})
		// 	console.log(res)
		// }
	}
}
</script>

<style scoped>
.container {
	background-color: #fff;
	height: 100vh;
}

/* 背景板 */
.board {
	background-color: #fff;
	height: 89vh;
	width: 96vw;
	border: 6px solid rgb(10, 198, 185);
	border-radius: 35px;
	margin: 0 auto;
}

.board_border {
	height: 78vh;
	width: 85vw;
	border-radius: 35px;
	margin: 0.1rem auto;
}
</style>
