// router
import {createRouter, createWebHasHistory} from "vue-router";

import HomeView from '@/views/HomeView.vue';
import JobResultView from '@/views/JobResultView.vue';

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomeView  
    },
    {
        path: "/jobs/results",
        name: "JobResult",
        component: JobResultView  
      }
];

const router = createRouter({
    history: createWebHasHistory(),
    routes: routes
})

export default router;