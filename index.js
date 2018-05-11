import Vue from 'vue'
import store from './src/store'
import router from './src/router'

import * as firebase from 'firebase'

import AppRoot from './src/components/AppRoot'

Vue.config.productionTip = false

window.onload = function () {
  const App = new Vue({
    name: 'Gerfs',
    el: '#app',
    router,
    store,
    render: h => h(AppRoot),
    created () {
      
      firebase.initializeApp({
        apiKey: "AIzaSyBTaGXeh8sCdiiGke_OwI4Sf2JX9gH8XIY",
        authDomain: "gerfs-acaa8.firebaseapp.com",
        databaseURL: "https://gerfs-acaa8.firebaseio.com",
        projectId: "gerfs-acaa8",
        storageBucket: "gerfs-acaa8.appspot.com",
        messagingSenderId: "839299684600"
      })
      
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const authed = {
            email: user.email,
            id: user.uid
          }
          this.$store.dispatch('autoSignIn', authed)
        }
      })
    }
  })
}