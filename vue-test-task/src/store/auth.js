import firebase from 'firebase/app'
export default {
	actions:{
		async login({commit},{email,password}){
			try{
				await	firebase.auth().signInWithEmailAndPassword(email,password)
			}catch(e){
				commit(console.log(e))
			}
		}
	}
}