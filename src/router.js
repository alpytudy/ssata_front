import { createWebHistory, createRouter } from "vue-router";
import Article from "./components/Article.vue";
import MainPage from "./components/MainPage.vue"

const routes = [
    {
    path: "/",
    component: MainPage,
    },
  {
    path: "/article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;