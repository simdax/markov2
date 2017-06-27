<template>
	
		<div class="vignette">		
			<slot></slot>
			<input v-model="t" type="text">
			<label for=""> can init ? </label>
			<input type="checkbox" checked>
			<button>remove</button>
		</div>	
</template>


<script>
	export default 
	 {
		props:['id'],
		data(){return{
			t:'',
		}},
		watch:{
			t(){
				this.$emit('update',{in:this.t,key:this.id})
			}
		}
		
	}
</script>