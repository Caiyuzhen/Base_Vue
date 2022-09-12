export default {
	template: /*html*/
	`
		<!-- 👇子组件的一个事件去触发父组件的一个事件, 然后改变父组件数据的方式:
				1.子组件声明一个 data()， 用来存放数据
				2.子组件声明一个 add() 方法，用 this.$emit 来暴露事件给父组件
				3.在父组件内定义一个【父组件改变数据】的方法 
				4.给【渲染在父组件身上】的【子组件】绑定父组件的方法 
				-->
				
		<form @submit.prevent="add"  v-model="foodData">
			<input v-bind:class="{inputBar: true}" type="text" placeholder="input something..." v-model="newFood"/>
			<!--3.用 v-on 给输入框绑定事件, 用 :class="{buttonColor: true} 给元素绑定 css 类 用 v-if, v-else-if, v-else 来判断不同的状态, v-else 不需要接属性值-->
			<button :class="{buttonColor_gray: true}" type="submit" v-if="foodData.length <= 3">👉 Add foods</button>
			<button :class="{buttonColor_black: true}"  type="submit" v-else-if="foodData.length > 3   &&   foodData.length < 5">🤙 Add more foods</button>
			<button :class="{buttonColor_red: true}" type="submit" v-else>🔥 Keep add foods</button>
		</form>
	`,


	//子组件内先存入所输入的数据
	data() {
		return {
			newFood: ''  //🔥用来存放输入框的临时数据
		}
	},
	


	//子组件向父组件添加数据
	methods: {
		add() {
			this.$emit('add', this.newFood) //🔥【向全局暴露】一个 add 事件, 以及 newFood 这个数据, 用来添加数据
			this.newFood = '' // ⚡️ push 完数据后, 清空输入框
		}
	},



	//用来获取父组件的 foods.length
	props: {
		foodData: Array,
	}
}