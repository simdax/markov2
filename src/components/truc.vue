
<template>
	
	<div>
		
		<h2>des mels</h2>
		<io v-for="n in views" :key='n' :id='[n-1]' @update='parse($event)'>
			{{"abcdefghijklmn"[n-1]}}
		</io>
		<button @click='add'>add</button>

		<h2>de la structure</h2>
		<markov></markov>
		<div id="random">
			<div v-for='n in views'>
				<div class="weights">
					{{"abcdefghijklmn"[n-1]}}
					rules :
					<div v-for='x in views'>
						<label for="">			{{"abcdefghijklmn"[x-1]}} </label>
						<button @click="io(n-1,x-1,true)">+</button>	
						<button @click="io(n-1,x-1,false)">-</button>			
					</div>
				</div>	
			</div>	
		</div>

 		<div id="result">
			<label for="">LENGTH
				<input v-model="length" type="number">
			</label>
		</div>
		
		<button @click="generate">generate</button>


	</div>

</template>

<script>
	
	import io from './io.vue'
	import markov from 'markov-vue'

	console.log(io);

	var codeEvent = new Event("generate");
	// var bus= new Vue();
	export default{
		components:{io,markov},
		data(){return{
			views: 0,
			mels:[],
			inits: [],
			length: 5,
			res:'',
		}},
		methods:{
			add(){
				this.views++;
				this.mels.push('');
				w.addKey();
			},
			io(x,y,plus){
				if(plus){
					w.increment(x,y)						
				}else{
					w.decrement(x,y)
				}
			},
			parse(ev){
				this.mels[parseInt(ev.key)] = ev.in;
				this.generate();
			},
			generate(){
				this.res='';
				var j = 0;
				for (var i = 0; i < this.length; i++) {
					this.res += this.mels[j];
					j = w.forme(j);
					if(i < this.length-1){
						this.res += ' ~ ';
					}
				};
				window.dispatchEvent(codeEvent,this.res);
			}
		}
	}

</script>