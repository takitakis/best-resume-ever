import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@/pages/resume';
// import Home from '@/pages/home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Resume
        }
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/resume/:resumeid',
        //     name: 'resume',
        //     component: Resume
        // }
    ]
});
