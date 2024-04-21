import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./views/Home.vue"
import Post from "./views/Post.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home, props: true },
    {
      path: "/post/:id",
      component: Post,
    },
  ],
})

export default router
