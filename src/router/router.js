import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'countries',
    component: () => import(/* webpackChunkName: 'list' */ '../views/CountriesList.vue'),
    children: [
      {
        path: ':code',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../views/CountryDetails.vue')
      },
      {
        path: '',
        name: 'Hello',
        component: () => import(/* webpackChunkName: 'details' */ '../views/Hello.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/IRONHACK-lab14-vue-wiki-countries/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
