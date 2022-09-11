import AppSectionList from "/components/AppSectionList.js"

export default {
	components: { AppSectionList },
	// 🔥ES6-html 插件, 可以更好的显示 html 代码
	template: /*html*/
	`
		<!-- 👛 未购零食, 在子组件内定义  headline 的 prop 属性, 然后就可以在这个【父组件内】传值（使用父组件的数据）了-->
		<app-section-list
			headline="👛 Did not purchase"
			v-bind:beforeBuyChild="beforeBuy"
			>
		</app-section-list>

		
		<!--  💵 已购零食 -->
		<!-- 🔥 v-show 用数组返回的 length 长度来判断是否该显示 -->
		<section v-show="foods.filter(item => item.purchased).length">
			<h2> {{title02}} </h2>
			<ul>
				<!-- 🔥 filter 过滤出已 checked 的零食 -->
				<li 
					v-for="food in foods.filter(item => item.purchased)"
					v-bind:key="food.id"
					>
						<span>{{ food.name }}</span>
						<!-- 因为 v-bind 直接可以读取 Vue 里的数据了，所以不用 {{}} 差值表达式-->
						<img v-bind:src="food.image">
						<input v-model="food.purchased" type="checkbox">
						<span>{{food.purchased}}</span>
				</li>
			</ul>
		</section>
	`,

		data(){//在 data 函数内返回一个对象, 可以存放数据
			return {
				title: '👛 Did not purchase',
				title02: '💵 Purchased Snack List',
				foods: [
					{id:1, name: 'bread', image:'./img/bread.png', purchased: false},
					{id:2, name: 'cake', image:'./img/cake.png', purchased: false},
					{id:3, name: 'salad', image:'./img/salad.png', purchased: false},
				]
			}
		},

		computed: {
			beforeBuy() { //未购买的表达式
				return this.foods.filter(item => !item.purchased)
			},
			afterBuy() { //未购买的表达式
				return this.foods.filter(item => item.purchased)
			}
		}
}