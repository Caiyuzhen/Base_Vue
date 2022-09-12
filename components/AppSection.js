import AppSectionList from "/components/AppSectionList.js"

export default {

	// 👇注册组件
	components: { AppSectionList },



	// 🔥组件渲染模板, 使用 ES6-html 插件, 可以更好的显示 html 代码
	template: /*html*/`
		<!-- 父组件传递数据给子组件步骤：
				1.在【引用了子组件】的【父组件内】定义 byChild 这个 prop 属性，并且传入 beforeBuy 、 afterBuy 两个表达式
				2.在【子组件】内定义 byChild 这个 prop 属性，并且在设置 byChild 属性的数据类型 -->


		<!-- 👛 未购零食: 🔥 在子组件内定义  headline 的 prop 属性, 然后就可以在这个【父组件内】传值（使用父组件的数据）了, 然后⚡️分别访问两组数据:	filtersFn -> afterBuy-->

		<!--👇用 v-on 给输入框绑定事件, 用 :class="{buttonColor: true} 给元素绑定 css 类 用 v-if, v-else-if, v-else 来判断不同的状态, v-else 不需要接属性值-->
		<form v-on:submit.prevent="add">
			<input v-bind:class="{inputBar: true}" type="text" placeholder="input something..." v-model="newFood"/>
			
			<button :class="{buttonColor_gray: true}" type="submit" v-if="foods.length <= 3">👉 Add foods</button>
			<button :class="{buttonColor_black: true}"  type="submit" v-else-if="foods.length > 3   &&   foods.length < 5">🤙 Add more foods</button>
			<button :class="{buttonColor_red: true}" type="submit" v-else>🔥 Keep add foods</button>
		</form>

		
		<app-section-list headline="👛 Did not purchased" v-bind:buyChild="filtersFn.beforeBuy"> </app-section-list>
		
		<!--  💵 已购零食: 🔥 用 v-show 判断数组返回的 length 长度来判断是否该显示, 然后⚡️分别访问两组数据:	filtersFn -> afterBuy-->
		<app-section-list headline="💵 Purchased Snack List" v-bind:buyChild="filtersFn.afterBuy" > </app-section-list>

	`,
	



	// 🔥组件身上的数据
	data(){//在 data 函数内返回一个对象, 可以存放数据
		return {
			foods: [
				{id:1, name: 'bread', image:'./img/bread.png', purchased: false},
				{id:2, name: 'cake', image:'./img/cake.png', purchased: false},
				{id:3, name: 'salad', image:'./img/salad.png', purchased: false},
			],
			newFood: ''  //🔥用来存放输入框的临时数据
		}
	},




	// 🔥抽离出两个表达式
	computed: {
		// 👇因为子组件的【一个模板】不能【传两个参数】, 所以把两个方法【整合成一个对象】
		filtersFn(){
			return {
				//未购买的表达式
				beforeBuy: this.foods.filter(item => !item.purchased),
				//已购买的表达式
				afterBuy: this.foods.filter(item => item.purchased)
			}
		}
		/*  beforeBuy() { //未购买的表达式
		 		return this.foods.filter(item => !item.purchased)
		 	},
			afterBuy() { //未购买的表达式
		 		return this.foods.filter(item => item.purchased)
			}*/
	},


	// 🔥组件身上的方法
	methods: {
		add() {
			this.foods.push({
				id: this.foods.length + 1,
				name: this.newFood,
				image: '/img/bread.png',
				purchased: false,
			})
			this.newFood = ''// ⚡️ push 完数据后, 清空输入框
		}
	}

}