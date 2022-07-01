<template>
	<view class="container">


		<!-- 		<uni-swipe-action ref="swipeAction">
			<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id"
				@change="swipeChange($event, index)" @click="swipeClick($event, index)">
				<view class="content-box">
					<text class="content-text">{{ item.content }}</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action> -->

		<uni-swipe-action ref="swipeAction">
			<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id"
				@click="swipeClick($event, index)">
				<view class="content-box">
					<view class="todo_card">
						<img src="../../static/img/checkbox_unchecked.png" v-if="check" @click="chencBox">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAAAXNSR0IArs4c6QAABAVJREFUeF7tnEFu2kAYhWcwO0BNJLLPDZqeoHTbgMQNkt4gPUHTEzQ3aHMDJNJukxuUnqDdQ0Ujwi54qqGiNWAzv8cQz6MvW/7ffn6fX/xrxqAV/6Ac0FBqKVYRGNhNQGAEBuYAmFwmjMDAHACTy4QRGJgDYHJzJ6w2Oj3TRl9orU+QrtUYMzDaXE2bn6+RdK9qlQMbdw/qj4+3aKBWL9iCe6hWX6nD3i9EcGJg9WH7KzqsBaA5tKObF3sLrPbz9KJiKh8QLzBLc6zUm2mz/wntmkQJ26d0oadMBKwx6hi0O1Gid9Lsi65fcqynqhEJJrCnwuE+D4G5PQqqgsCCwuEWQ2Buj4KqILCgcLjFEJjbo6AqCCwoHG4xBOb2KKgKAgsKh1sMgbk9CqoCElis47c6rnS1Vi+LuMmlqSLuCXuNMe8fjm4ubXlj1LGr7WfC1rUyAvN1Tt53PWn2z5PltVHnvKLUR/kh/lUSmI9rwh5jzLeHarWVtlNcH7ZbWqueUvqZ8HDzMgLL41auWnM/iarHWdv6tfHrk8osulVKHeQ5LIHlcUtca+7jKG5ND78MUlvG3YPGbPY9LywmTAwgX+HGrfyCLwYxYflYOKuTE2FacWPUscPG0hDiPGiigMDyuOWuXZsIky31YftSa/3OfZjsCgLL8Mb+W7MfScfvTROhPU6RUT4pkcBSgCWfQTKjdzMRpt1LBLbiStrAsBna7iZCAnM8PDZNd1nQdjkRElgBYGnPoV1PhAQmGM9cr0MnkrbziZDABMBsiQtaY9TpTqLoLnPZqcDirksih44NY73PFw981whdoBafE9gGp1xJW2stsEZIYFv6MoQYWsE1QgLbEjDJM83WFF0jJLAtAnNB28YaIYFtGVgWNNnSlRSHu45Dh9ujpYqldUbPXeOcp1wqJzAP9+bQoqjnu2vsccq/LQTm794PpdSxf7tfJ4H5+VZaF4GVZr3fiQnMz7fSugisNOv9Tkxgfr6V1kVgpVnvd2IC8/OttC4CK816vxPvLbD6sD3QWj/3syXMrvm7j0c3UD/SaZ0UfQOTP78Xzk0nAmbl7lPKUNMlTtj8/vqzC3yH/q/R9Rp4OFlKVyJO2KLd7llpY+yPNEM90ywoo/WVz8tAIUHMDSwk8f+jFgIDo05gBAbmAJhcJozAwBwAk8uEERiYA2BymTACA3MATC4TRmBgDoDJZcIIDMwBMLlMGIGBOQAmlwkjMDAHwOQyYQQG5gCYXCaMwMAcAJPLhBEYmANgcpkwAgNzAEwuE0ZgYA6AyWXCCAzMATC5TBiBgTkAJpcJIzAwB8DkMmEEBuYAmFwmjMDAHACTy4QRGJgDYHKZMAIDcwBMLhNGYGAOgMllwsCA/QYVDuF8WM76cQAAAABJRU5ErkJggg==" v-if="!check" @click="chencBox">
						<text>测试文字测试撒打了卡久等啦看到啦凯撒的</text>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				// show: false,
				// isOpened: 'none',
				check: true,
				swipeList: [{
					id: 0,
					options: [{
						text: '删除',
						isImage: true,
						src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaEPtWe1twkAMtW8B6CbdoHQDNqEjtBOxAmzULpCrQoNUkE7v7tkWTeX8dZ79PnJEwSorv3Tl/CUFPDpBUwK11r3UehCRZxHZEmJOovqhqicCe4HQAhbyR3bwDU71lRXBC5im2bUXFwEiZy1lx/SyCKjMwAbmU0t5Yvq5CdBShnrVaboxYBR/FTs09LdDVgJWfAqwOmjFwwTuBzAHzBPTOiPNM5ACPO2f37iNX7n/m8C9gV6HrhUM27/7PcAO6H2S2P4poNdhdN/DE0AErPWWAW6PkJUgwqcA5FB0PROIdhj1zwSQQ9H1TCDaYdQ/E0AORdczgWiHUf9MADkUXQ9PAH2woDoyIAWwDiHnr3W2v9sXWS/RP/O3ipUwwH9pKV07t5EEPFdKSH/3yqlfwM9G0meph+gPLP26Bcwzl83k27JW3SAeRP0squ8jG8shAQShcEgKCLcYDFh9At8m8aJA2BtS2AAAAABJRU5ErkJggg==',
						style: {
							backgroundColor: 'rgb(255,58,49)',
							imgWidth: '64rpx',
							imgHeight: '72rpx'
						}
					}],
					content: 'item2'
				}, ]
			};
		},
		onReady() {
			// 模拟延迟赋值
			setTimeout(() => {
				this.isOpened = 'right';
			}, 1000);

			uni.$on('update', res => {
				console.log(111);
				this.swipeClick({
					content: {
						text: '添加'
					}
				})
			})
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
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.showToast({
						title: `点击了${e.content.text}按钮`,
						icon: 'none'
					});
				}
			}
		}
	};
</script>

<style lang="scss">
	// .content-box {
	// 	flex: 1;
	// 	/* #ifdef APP-NVUE */
	// 	justify-content: center;
	// 	/* #endif */
	// 	height: 44px;
	// 	line-height: 44px;
	// 	padding: 0 15px;
	// 	position: relative;
	// 	background-color: #fff;
	// 	border-bottom-color: #f5f5f5;
	// 	border-bottom-width: 1px;
	// 	border-bottom-style: solid;
	// }

	.content-text {
		font-size: 15px;
	}

	.todo_card {
		height: 3.5rem;
		width: 21rem;
		background-color: rgb(192, 169, 44);
		border-radius: 10px;
		margin-top: 0.8rem;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}

	.todo_card img {
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
</style>
