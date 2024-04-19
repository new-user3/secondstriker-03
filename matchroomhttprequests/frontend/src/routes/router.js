import { createRouter, createWebHistory } from 'vue-router';
import Matchroom from '../components/matchRoom.vue'; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Other routes...
    { path: '/matchroom/:id', component: Matchroom },
  ]
});

export default router;
