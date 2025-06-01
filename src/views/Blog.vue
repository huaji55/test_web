<!-- src/views/Blog.vue -->
<template>
  <div class="max-w-4xl mx-auto px-6 mt-10">
    <h1 class="text-4xl font-bold mb-8 text-indigo-700">Blog</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
        class="mb-6 p-4 border rounded-lg hover:shadow-lg transition cursor-pointer"
      >
        <RouterLink :to="`/blog/${post.id}`" class="block">
          <h2 class="text-2xl font-semibold text-indigo-600 hover:underline">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 mt-1">{{ post.excerpt }}</p>
          <p class="text-sm text-gray-400 mt-2">{{ formatDate(post.date) }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  content: string
}

const posts = ref<Post[]>([
  {
    id: 1,
    title: 'test',
    excerpt: 'test',
    date: '2025-05-20',
    content: 'First blog post...',
  },
])

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>