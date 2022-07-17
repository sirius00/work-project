<template>
	<view class="date_day">
		<swiper class="swiper_st">
			<swiper-item class="swiper_item" v-for="(list, index) in daysList" :key="index" >
				<view v-for="(item, index) in list" class="day_st" :class="current == index ? 'select_day' : ''"
					@click="day_select(index)" :key="index">
					{{ item.day }}
					<line-area />

				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
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
			// dayslist: this.daysList,
			// dayList: [
			// 	['1', '2', '3', '4', '5', '6', '7'],
			// 	['8', '9', '10', '11', '12', '13', '14']
			// ],
			current: 2,
		}
	},
	computed: {
		...mapState(['daysList'])
	},
	onLoad() {
		// getpush () 
	},
	methods: {
		day_select(index) {
			this.current = index
		},

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
