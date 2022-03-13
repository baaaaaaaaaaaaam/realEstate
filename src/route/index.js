import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: ()=>import('@/components/home') },
    { path: '/sale', component: ()=>import('@/components/sale') },
    { path: '/news', component: ()=>import('@/components/news') },
    { path: '/statistic', component: ()=>import('@/components/statistic') },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  
  export default router;