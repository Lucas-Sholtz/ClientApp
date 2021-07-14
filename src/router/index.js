import { createWebHistory, createRouter } from "vue-router";
import Orders from "@/components/Orders.vue";
import Catalogue from "@/components/Catalogue.vue";

const routes = [
    {
        path: "/Orders",
        name: "Orders",
        component: Orders,
    },
    {
        path: "/Catalogue",
        name: "Catalogue",
        component: Catalogue,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;