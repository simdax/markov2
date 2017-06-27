
define(function(){

	function Weights () {
		this.keys=[];
		this.table=[];
		this.limits=[];
	};
	Weights.prototype={
		addKey(k){
		// en init, c'est 1 partout
		var kDict=[];
		for (var i = 0; i < this.keys.length+1; i++) {
			kDict.push(1)
		};
		// pour chaque clefs on rajoute une entrée à la fin
		for (var i = 0; i < this.keys.length; i++) {
			this.keys[i].push(1)
		}
		this.keys.push(kDict);	
		this.updateTab();
	},
	setKey(x,y,val){
		if (val>=0) {
			this.keys[x][y]=val;
			this.updateTab();			
		}
	},
	increment(x,y){
		this.setKey(x,y,this.keys[x][y]+1);
	},
	decrement(x,y){
		this.setKey(x,y,this.keys[x][y]-1);
	},
	updateTab(){
		this.table=[]; this.limits=[];
		for (var i = 0; i < this.keys.length; i++) {
			this.table.push(this.pondere(this.keys[i]));
			this.limits.push(this.accumule(this.table[i]));
		}
	},
	// helpers
	accumule(array){
		var tmp=[];
		for (var i = 0; i < array.length; i++) {
			if (i>0) {
				tmp.push(tmp[i-1] + array[i]);
			}else{
				tmp.push(array[i]);
			};
		};
		return tmp
	},
	pondere(array){
		var tmp= [];
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		for (var i = 0; i < array.length; i++) {
			var v = array[i];
			tmp[i] = v / sum;
		}
		return tmp;
	},
	forme(key=0){
		var r = Math.random();
		var poids = this.limits[key];
		for (var i = 0; i < poids.length; i++) {
			if (r < poids[i]){
				// console.log(i);
				return i
			}
		}
	}
};

return Weights;
})