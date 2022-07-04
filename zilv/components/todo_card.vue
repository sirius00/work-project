<template>
	<view >
		<uni-swipe-action >
			<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id"
				@click="swipeClick($event, index)" class="three">
				<view class="content-box">
					<view class="todo_card">
						<image src="../static/img/checkbox_unchecked.png" mode="" v-if="check" @click="chencBox"></image>
						<image src="../static/img/checked.png" mode="" v-if="!check" @click="chencBox"></image>
						<text>测试文字测试撒打了卡久等啦看到啦凯撒的</text>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<view class="tianchong">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
					
				}, ]
			}
		},

		methods: {
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
			}
		}
	}
</script>

<style>
.todo_card {

	height: 3.5rem;
	background-color: rgb(192, 169, 44);
	border-radius: 10px;
	display: flex;
	flex-flow:  row nowrap;
	align-items: center;
}
.todo_card image {
	height: 1.5rem;
	width: 1.5rem;
	padding-left: 0.5rem;
}
.todo_card text {
  display: block;
	width: 80%;
	height: 3.5rem;
	line-height: 3.5rem;
	font-size: 16px; 
  padding-left: 0.5rem; 
	overflow: hidden;
}
	.content-text {
		font-size: 15px;
	}
	
	.tianchong {
		height: 0.8rem;
		background-color: #fff;
	}

</style>