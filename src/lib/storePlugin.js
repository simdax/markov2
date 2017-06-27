import vuex from 'vuex'

let state={
	mels: [],
	poids: []
}
let getters={
	poids(s){ return s.poids}
}
let setters={

}
let actions={

}

const module={
	state,
	getters,
	mutations:setters,
	actions
}

export default module