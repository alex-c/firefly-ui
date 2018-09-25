import Vue from 'vue';
import App from './App.vue';

//Router
import router from './router';

//Store
import store from './store';

//Buefy
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
Vue.use(Buefy, {
    defaultIconPack: 'fa'
});

//Initialize App
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
