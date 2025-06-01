<!-- src/App.vue -->
<template>
  <div class="w-full min-h-screen bg-white text-gray-900">
    <Navbar />
    <router-view />
  </div>
      <nav class="flex flex-col items-start gap-2 p-4 fixed top-36 left-4 bg-indigo-600 text-black rounded-lg shadow-lg z-10">
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        class="px-4 py-2 w-full text-left hover:bg-indigo-700 rounded transition"
        active-class="bg-indigo-800"
      >
        {{ item.name }}
      </router-link>
      </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background-color: #f2f2f2;
}
router-link {
  margin: 0 10px;
}
</style>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
const menuItems = [
  { name: 'Record', path: '/record' },
  { name: 'Blog', path: '/blog' },
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>