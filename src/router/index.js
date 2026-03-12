import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView         from '../views/HomeView.vue'
import ServicesView     from '../views/ServicesView.vue'
import AboutView        from '../views/AboutView.vue'
import PortfolioView    from '../views/PortfolioView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import ContactView      from '../views/ContactView.vue'

const routes = [
  { path: '/',             component: HomeView,         name: 'home' },
  { path: '/services',     component: ServicesView,     name: 'services' },
  { path: '/about',        component: AboutView,        name: 'about' },
  { path: '/portfolio',    component: PortfolioView,    name: 'portfolio' },
  { path: '/testimonials', component: TestimonialsView, name: 'testimonials' },
  { path: '/contact',      component: ContactView,      name: 'contact' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
