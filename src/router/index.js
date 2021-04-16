import { createRouter, createWebHistory } from "vue-router";

import { routes } from './routes'

export default createRouter({
    linkActiveClass: 'is-active',
    history: createWebHistory(),
    routes
});