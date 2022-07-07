<template>
	<view>
		<view class="bgboard">
			<view class="board-border ">
				<view>
					<top-tabbar :tabBars="tabBars" :tabIndex="tabIndex"></top-tabbar>

				</view>
				<view class="week">
					<view v-for="item in weekDay" :key="index">
						{{ item }}
					</view>
				</view>
				<calendar />
				<view class="todo_board">
					
					<scroll-view scroll-y class="scroll_view" enable-flex>
						<todo-card v-for="(item, index) in taskList" :card="item" :key="index"/>
					</scroll-view>
					
					<addnote ></addnote>
					<addvoice ></addvoice>
				</view>
				<view class="add_note">
					
					<view @click="addNote">
						<add-note></add-note>
					</view>
					<view @click="addVoice">
						<add-voice></add-voice>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topTabbar from "@/components/topTabbar/topTabbar.vue"
	import voiceBar from "@/components/voiceBar.vue"
	import calendar from "@/components/calendar.vue"
	import todoCard from "@/components/todo_card.vue"
	import addNote from "@/components/buttons/addNote.vue"
	import addVoice from "@/components/buttons/addVoice.vue"
	import addnote from "@/components/add/addnote.vue"
	import addvoice from "@/components/add/addvoice.vue"
	
	export default {
		components: {
			topTabbar,
			calendar,
			voiceBar,
			todoCard,
			addNote,
			addVoice,
			addnote,
			addvoice
		},
		data() {
			return {
				weekDay: ["一", "二", "三", "四", "五", "六", '日'],
				tabIndex: "timecard",
				tabBars: [{
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
				
			}
		},
		computed: {
			addnote() {
				return this.$store.state.ifnote
			},
			addvoice(){
				return this.$store.state.ifvoice
			},
			taskList() {
				return this.$store.state.taskList
			}
		},
		watch: {

		},
		methods: {
			addNote() {
				this.$store.commit("addNote")
			},
			addVoice() {
				this.$store.commit("addVoice")
			}
		},
	}
</script>

<style scoped>
	/* 背景板 */
	.bgboard {
		height: 88vh;
		width: 90vw;
		border: 6px solid rgb(10, 198, 185);
		border-radius: 35px;
		margin: 0.5rem auto;
		
		display: flex;
		flex-flow: column;
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

	.todo_board {
		margin-top: 0.4rem;
		height: 75%;
		
	}

	.scroll_view {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;

	}

	.add_note {
		height: 3rem;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;

	}
	.zhezhao {
		  background-color: chartreuse;
		  position: absolute;
		  height: 100vh;
		  width: 100vw;
		  top: 0;
		  left: 0;
			z-index: 5;
	} 

</style>
