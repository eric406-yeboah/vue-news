import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import DetailPage from '@/pages/DetailPage.vue';
import ContactPage from '@/pages/ContactPage.vue'

const routes = [
    {path:'/',component:HomePage},
    {path:'/detail',component:DetailPage},
    {path:'/contact',component:ContactPage}
];


const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });
  
  export default router;