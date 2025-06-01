// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Blog from '@/views/Blog.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import Record from '@/views/Record.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/blog', component: Blog, name: 'Blog' },
  { path: '/blog/:id', component: BlogDetail, name: 'BlogDetail' },
  { path: '/record', component: Record, name: 'Record' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router