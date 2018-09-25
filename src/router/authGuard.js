import store from '../store';

//Navigation guard for routes requiring authentication
var authGuard = function (to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.authenticated) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next();
        }
    } else {
        next();
    }
}

export default authGuard;
