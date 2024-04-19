import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/homePage.vue'
import leagues from '../components/leaguesPage.vue'; 
import matches from '../components/matchesPage.vue'; 
import profile from '../components/profilePage.vue'; 
import matchRoom from '../components/matchRoom.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/leagues', component: leagues },
    { path: '/matches', component: matches },
    { path: '/profile', component: profile },
    { path: '/matchroom/:id', component: matchRoom},
    //{ path: './matchroom', component: matchRoom},
  ],
});

export default router;