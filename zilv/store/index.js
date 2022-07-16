import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {

		userinfo: {},
		hasregister: false,
		haslogin: false,

		ifnote: false,
		ifvoice: false,

		daysList:[],
		taskList: [{
				id: 0,
				content: '任务1'
			},
			{
				id: 1,
				content: '任务2'
			},
		]
	},
	mutations: {
		//登录
		xlogin(state, provider) {
			state.haslogin = true
			state.userinfo = provider

			if (state.userinfo.img != '') {
				state.hasregister = true
			};
			uni.setStorage({
				key: 'userinfo',
				data: provider
			})
			// console.log(state.userinfo);
		},
		// 退出登录
		logout(state) {
			state.userinfo = {}
			uni.removeStorage({
				key: 'userinfo',
				success:res => {
					uni,uni.showToast({
						title: '退出登录',
						icon:'success'
					});
					console.log(state.userinfo);
					uni.reLaunch({
						url:'/pages/login/phone_login'
					})
				}
			})
		},
		xprofile(state,provider) {
			state.userinfo = provider
			// uni.setStorage({
			// 	key: 'userinfo',
			// 	data: provider
			// })
		},
		xtoux(state, provider){
			let img = provider[0].img
			state.userinfo.img = img
			state.userinfo.imgpath = img
			uni.setStorage({
				key: 'userinfo',
				data: state.userinfo
			})
		},
		
		// change_recommend_or_timecard() {
		// 	state.recommend_or_timecard = !state.recommend_or_timecard
		// },
		//是否显示显示添加笔记
		addNote(state) {
			state.ifnote = !state.ifnote
		},
		//是否显示添加声音笔记
		addVoice(state) {
			state.ifvoice = !state.ifvoice
		},

		addTask(state,task) {
			let push_id = task.id + 1
			state.taskList.push({'id': push_id, 'content': task.content})
		},
		addVoiceTask() {
			
		}
	},
	actions: {},
	modules: {
		
	}
})
export default store
