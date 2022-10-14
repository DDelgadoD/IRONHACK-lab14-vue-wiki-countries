import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/IRONHACK-lab14-vue-wiki-countries/',
    name: 'countries',
    component: () => import(/* webpackChunkName: 'list' */ '../views/CountriesList.vue'),
    children: [
      {
        path: '/IRONHACK-lab14-vue-wiki-countries/:code',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../views/CountryDetails.vue')
      },
      {
        path: '/IRONHACK-lab14-vue-wiki-countries/',
        name: 'Hello',
        component: () => import(/* webpackChunkName: 'details' */ '../views/Hello.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;