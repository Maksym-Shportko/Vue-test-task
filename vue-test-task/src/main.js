import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
Vue.config.productionTip = false

// const firebaseConfig = ;
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDYFogKdvLViwXv7tm6h31zBNGZHaz8dSg",
  authDomain: "vue-test-task-c0d00.firebaseapp.com",
  databaseURL: "https://vue-test-task-c0d00.firebaseio.com",
  projectId: "vue-test-task-c0d00",
  storageBucket: "vue-test-task-c0d00.appspot.com",
  messagingSenderId: "172211553163",
  appId: "1:172211553163:web:897e9cca0c55ac1214a58e"
})
let app
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app =  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  }

})


