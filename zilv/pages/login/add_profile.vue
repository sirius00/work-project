<template>
	<view class="background bgcolor">
		<view class="reg_name center">
			<view class="name_guide">
				您的昵称
			</view>
			<input-area>
				<view class="input-code-sp">
					<view class="phone_ip">
						<input type="text" placeholder="输入昵称" class="code_ip_ip" @blur="check_name" v-model="user_name">
					</view>
				</view>
				<view class="catch-code-sp" v-if="check">
					<img src="../../static/img/x-circle-clear.png" alt="">
				</view>
			</input-area>
			
			<view class="index-input input-account">

			</view>
		</view>
		<view class="reg_sex center">
			<view class="name_guide">
				您的性别
			</view>
			<view class="sex_sp">
				<view class="sex">
					<img src="../../static/img/nvxie.png" alt="" @click="choose_female" v-if="!female">
					<img src="../../static/img/nvxie-active.png" alt="" v-if="female" @click="choose_female" >
				</view>
				<view class="sex">
					<img src="../../static/img/nanxie.png" @click="choose_male" v-if="!male">
					<img src="../../static/img/nanxie-active.png" alt="" v-if="male" @click="choose_male" >
				</view>
			</view>
		</view>
		<view class="reg_birth center">
			<view class="name_guide">
				您的生日
			</view>
			<view class="datepicker">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
		</view>
		
		<view class="">
			<navigator url="/pages/login/add_toux">
				<button class="continue">继续</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	//出生日期
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 10;
		} else if (type === 'end') {
			year = year + 10;
		}
		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}

	import inputArea from "../../components/inputArea.vue"
	export default {
		components: {
			inputArea
		},
		data() {
			return {
				user_name: null,
				female: false,
				male: false,
				// sex,0表示女,1表示男
				sex: null,
				check: false,
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
			}
		},
		methods: {
			check_name(event) {
				this.user_name = event.detail.value
				// 发送网络请求,对比后台数据,检测名字是否可用

			},
			//出生日期
			bindDateChange: function(e) {
				this.date = e.detail.value;
			},
			choose_female() {
				if (this.male != true){
					this.female = !this.female
					if(this.female == true){
						this.sex = 0
					}
				}
			},
			choose_male() {
				if (this.female != true){
						this.male = !this.male
						if(this.female == true){
							this.sex = 1
						}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.background {
			height: 100vh;
			display: flex;
			flex-flow: column ; 
			justify-content: space-around;
			align-items: center;
	}
	.bgcolor {
		background: -webkit-linear-gradient(bottom,#1b6365, #38e1e5, #37e2e5);
	}

	.name_guide {
		padding-bottom: 1rem;
		color: #fff;
	}

	.index-input {
		background: #fff;
	}

	.catch-code-sp {
		margin-left: 2.7rem;
	}

	.zl_button {
		background: #fff;
		color: #000;
		font-weight: 450;
	}

	.sex_sp {
		display: flex;
		width: 100vw;
		justify-content: space-around;

	}
	.sex {
		width: 7rem;
		height: 7rem;
		background-color: #fff;
		border-radius: 15px;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
	.sex{
		image {
			height: 100rpx;
			width: 200rpx;
		}
	}
	.reg_birth {
		width: 80vw;
		
	}
	.datepicker {
		background: #fff;
		font-size: 1.6rem;
		color: #2abed1;
		border-radius: 18px;
	}
	.continue {
		width: 20rem;
	}
</style>
