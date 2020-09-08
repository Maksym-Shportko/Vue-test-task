import firebase from 'firebase/app'
export default {
	actions:{
		async login({commit},{email,password}){
			try{
				await	firebase.auth().signInWithEmailAndPassword(email,password)
			}catch(e){
				commit(alert('Invalid Email or password!'))
			}
		},
		async register({dispatch},{email,password,name,confirmPassword}) {
			try{
				await	firebase.auth().createUserWithEmailAndPassword(email,password)
				const userId = await dispatch('getUserId')
				await firebase.database().ref(`/users/${userId}/info`).set({name,confirmPassword})
			}catch(e){
				console.log(e);
				throw e
			}
		},
		getUserId() {
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		}
	}
}