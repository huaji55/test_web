<template>
  <div>
    <div
      class="w-full h-96 flex items-center justify-center"
      :style="{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
    >
      <div class="bg-black bg-opacity-50 p-6 rounded text-center">
      <h1 class="text-4xl font-bold text-white mb-2">Welcome to Adam's Blog</h1>
      <p class="text-white text-lg italic">just an interesting to build the web</p>
      <p class="text-white text-lg italic">Choose a category above to explore my records, blog posts, and more!</p>
      </div>
    
      <nav class="flex flex-col items-start gap-2 p-4 fixed top-36 left-4 bg-indigo-600 text-white rounded-lg shadow-lg z-10">
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
    </div>

    

    <!-- Record Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-indigo-600">Recent Records</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="record in records" :key="record.id" class="border rounded-lg p-4 shadow">
          <img :src="record.image" alt="record image" class="w-full h-48 object-cover rounded mb-2">
          <h3 class="text-lg font-bold">{{ record.title }}</h3>
          <p class="text-sm text-gray-600">{{ record.description }}</p>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-indigo-600">Latest Blog Posts</h2>
      <div class="space-y-4">
        <div v-for="post in blogPosts" :key="post.id" class="border-b pb-4">
          <h3 class="text-xl font-bold">{{ post.title }}</h3>
          <p class="text-sm text-gray-600">{{ post.summary }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { name: 'Record', path: '/record' },
  { name: 'Blog', path: '/blog' },
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<script lang="ts">
export default {
  data() {
    return {
      records: [
        { id: 1, title: 'Trip to Kyoto', image: '/images/kyoto.jpg', description: 'A photo from my 2024 Kyoto trip.' },
        { id: 2, title: 'Coding Day', image: '/images/coding.jpg', description: 'Just another day coding in the lab.' },
      ],
      blogPosts: [
        { id: 1, title: 'Understanding Vue Lifecycle', summary: 'An overview of the Vue 3 lifecycle and hooks you need to know.' },
        { id: 2, title: 'My Thoughts on AI Safety', summary: 'Sharing my perspective on responsible AI development.' },
      ]
    }
  }
}
import bgImage from '@/assets/images/background.jpg'
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>

<style scoped>
.bg-title-bg {
  background-image: url('@/assets/images/background.jpg'); /* 換成你的圖片路徑 */
}
</style>