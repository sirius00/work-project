<template>
	<view class="date_day">
		<swiper class="swiper_st" :current="3" @change="change_current()">
			<swiper-item class="swiper_item" v-for="(list, index) in daysList" :key="index">
				<view v-for="(item, index) in list" class="day_st" :class="currentday == index ? 'select_day' : ''"
					@click="day_select(index)" :key="index">
					{{ item.day }}
					<line-area />

				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
// 当前日期格式化
function format_date() {
	const time = new Date();
	let year = time.getFullYear()
	let month = time.getMonth() + 1
	let day = time.getDate()

	return `${year}-${month}-${day}`;
}
//查找当前日期所在列表index
// function searchindex(obj) {
// 	var index = 0
// 	var res = null
// 	var find = 0
// 	const today = format_date()
// 	for (let ar in obj) {
// 		res = ar.findIndex(list => list.date == today)
// 		if (res != -1) {
// 			find = index
// 		}
// 		index++
// 	}
// 	return find
// }



import {
	mapState
} from "vuex"
import lineArea from "@/components/todo_line/linesArea.vue"
// import baseUrl from "@/network/baseUrlsConfigs.js"
// const base2 = baseUrl.base2

export default {
	components: {
		lineArea,
	},
	data() {
		return {
			currentlist: null,
			currentday: null,
		}
	},
	computed: {
		...mapState(['daysList'])
	},

	onReady() {
		this.get_weekday()
	},
	methods: {
		change_current(e) {
			this.currentday = null
		},
		day_select(index) {
			this.currentday = index
		},
		get_weekday() {
			const time = format_date()
			let weekday = new Date(time).getDay()
			this.currentday = weekday
			
		}
	},
}
</script>

<style scoped>
.date_day {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
}

.swiper_st {
	/* background-color: bisque; */
	width: 22rem;
	height: 3rem;
}

.swiper_item {
	display: flex;
	flex-flow: row nowrap;
}

.day_st {
	flex: 1;
	margin: 1px 0.2rem;
	height: 2.6rem;
	line-height: 2.6rem;
	font-size: 18px;
	text-align: center;
	display: inline-block;

	box-shadow: 0 0 1px 2px rgb(188, 187, 187, 0.3);
	border-radius: 10px;

}

.select_day {
	border: 2px solid rgb(19, 221, 214);
}
</style>
