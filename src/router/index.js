import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/Views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/Views/NotFound.vue"),
  },
  {
    path: "/contact/:id",
    name: "contact.edit",
    component: () => import("@/Views/ContactEdit.vue"),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;