<template>
	<view class="zhezhao" v-if="ifnote" @click="hidenote">
		<view class="add_note" @click.stop="!hidenote">
			<view class="">
				<textarea 
				id="note_content" 
				placeholder="添加事项..." 
				class="addtext"
				@confirm="get_text_value"
				confirm-type="done"
				>
				</textarea>
			</view>
			<view class="limit">
				<view class="">
					<img src="../../static/img/limit.png" alt="" v-if="!limited" @click="limit">
					<img src="../../static/img/limited.png" alt="" v-else @click="limit">
				</view>
				<view>
					仅自己可见
				</view>
				
			</view>
			<view class="add_button" @click="add_task">
				添加
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		props:{
		
		},
		data() {
			return {
				limited: false,
				text_value: ''
			}
		},
		computed: {
			ifnote() {
				return this.$store.state.ifnote
			},
			get_last_task_id() {
				return this.$store.state.taskList.slice(-1).id
			}
		},
		methods: {
			// 添加权限
			limit() {
				this.limited = !this.limited
			},
			hidenote() {
				this.$store.commit("addNote")
			},
			// 获取新任务内容
			get_text_value(e) {
				// console.log('获取内容');
				this.text_value = e.detail.value
			},
			// 添加任务
			add_task () {
				let id = this.get_last_task_id
				let content = this.text_value
				this.$store.commit("addTask",{id: id, content: content})
				this.$store.commit("addNote")
			}
		}
	}
</script>

<style scoped >
	.zhezhao {
		/* background-color: chartreuse; */
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		z-index: 5;
	}
	.add_note {
		width: 500rpx;
		height: 480rpx;
		background-color: #fff;
		position: absolute;
		z-index: 10;
		top: 300rpx;
		left: 125rpx;
		border-radius: 15px;
		box-shadow: 0 0 1px 1px rgb(136, 136, 136, 0.2);
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-evenly;
	}

	.addtext {
		/* background-color: aquamarine; */
		padding: 20rpx;
		height: 200rpx;
		width: 400rpx;
	}

	.limit {
		align-self: flex-start;
		margin-left: 50rpx;
		display: flex;
		flex-flow: row nowrap;
		 align-items: center;
		 
	}
	.limit img {
			height: 40rpx;
			width: 40rpx;
			margin-right: 10rpx;
			margin-top: 4rpx;
		}

	.add_button {
		width: 200rpx;
		height: 80rpx;
		background-color: #46c4ba;
		color: #fff;
		line-height: 80rpx;
		border-radius: 13px;
		text-align: center;
	}
</style>
