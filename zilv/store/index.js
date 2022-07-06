import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		ifnote: false,
		ifvoice: false,
		taskList: [{
				id: 0,
				content: '任务1'
			},
			{
				id: 1,
				content: '任务2'
			},
			{
				id: 2,
				content: '任务3'
			}
		]
	},
	mutations: {
		addNote(state) {
			state.ifnote = !state.ifnote
		},
		addVoice(state) {
			state.ifvoice = !state.ifvoice
		},
		changeTask(state, value) {
			state.taskList[value.id].content = value.content
			console.log(state.taskList[value.id]);
		},
		addTask(state) {
			
		}
	},
	actions: {},
	modules: {
		
	}
})
export default store
