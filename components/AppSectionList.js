export default {
	template: /*html*/
	`
		<!-- <section v-show="foods.filter(item => !item.purchased).length"> -->
		<!-- 简化的写法, 抽离出 beforeBuy 表达式 -->
		<section v-show="BuyChild">
			<h2> {{title}} </h2>
			<ul>
				<!-- 🔥需要 v-bind:key="food.id" 才不会同时勾选多个-->
				<!-- v-for="food in foods.filter(item => !item.purchased)"  -->
				<li 
					v-for="food in BuyChild" 
					v-bind:key="food.id">
						<img v-bind:src="food.image">
						<input v-model="food.purchased" type="checkbox">
						<span>{{ food.name }}</span>
						<!-- 因为 v-bind 直接可以读取 Vue 里的数据了，所以不用 {{}} 差值表达式-->
						<span>{{food.purchased}}</span>
				</li>
			</ul>
		</section>
	`,

	props: {
		//在【子组件内】接收一个字符类型的 headline 属性, 然后就可以在【父组件】内设置 【headline 的属性】了, 用来定义标题文字！！
		headline: String, //相当于声明了一个类型
		BuyChild: Object
	}
}