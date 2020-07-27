import VueRouter from 'vue-router';
import Vue from 'vue';
import TestPage from '../components/TestPage';

Vue.use(VueRouter);

const routes = [
  { name: "foo", path: '/foo', component: TestPage },
  // { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;