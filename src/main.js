import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAinY9m_TK0XAaSxb5iUfCNoEpMgqttBm0",
  authDomain: "ottoklaus-b2956.firebaseapp.com",
  databaseURL: "https://ottoklaus-b2956.firebaseio.com",
  projectId: "ottoklaus-b2956",
  storageBucket: "ottoklaus-b2956.appspot.com",
  messagingSenderId: "225401601993",
  appId: "1:225401601993:web:5a59fa0177917ef141f218"
};

firebase.initializeApp(firebaseConfig);




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
