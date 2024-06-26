import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import DetailPage from '@/pages/DetailPage.vue';


const routes = [
    {path:'/',component:HomePage},
    {path:'/detail',component:DetailPage}

];


const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });
  
  export default router;