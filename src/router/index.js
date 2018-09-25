import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Import main sections
import PublicSection from '../components/PublicSection.vue';
import PrivateSection from '../components/PrivateSection.vue';

//Set up
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: PrivateSection,
            meta: {requiresAuth: true},
            children: [
                {
                    path: 'logout',
                    beforeEnter: function(to, from, next) {
                        store.commit('deauthenticate');
                        next('/login');
                    }
                }
            ]
        },
        {
            path: '/login',
            component: PublicSection
        }
    ]
});

//Add auth route guard
import authGuard from './authGuard.js';
router.beforeEach(authGuard);

//Export
export default router;
