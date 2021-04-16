
import homePage from '../pages/Home.vue'
import notFoundPage from '../pages/NotFound.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
    {
        path: '/',
        component: homePage,
        meta: { title: `${DOMAIN_TITLE} | home` }
    },
    {
        path: '/:catchAll(.*)*',
        component: notFoundPage,
        meta: { title: `${DOMAIN_TITLE} | not found` }
    }
]