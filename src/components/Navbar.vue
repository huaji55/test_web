<template>
  <nav class="w-full bg-indigo-600 text-black shadow-md">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
    >
      <!-- 左側網站標題 -->
      <div class="flex-shrink-0 font-bold text-2xl cursor-default select-none">
        Adam's Blog
      </div>

      <!-- 中間選單 -->
      <div class="hidden md:flex space-x-8 mx-auto">
        <RouterLink
          to="/record"
          class="hover:text-xl transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
          active-class="underline decoration-indigo-300"
          >Record</RouterLink
        >
        <RouterLink
          to="/blog"
          class="hover:text-xl transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
          active-class="underline decoration-indigo-300"
          >Blog</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-xl transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
          active-class="underline decoration-indigo-300"
          >Home</RouterLink
        >
        <RouterLink
          to="/contact"
          class="hover:text-xl transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
          active-class="underline decoration-indigo-300"
          >Contact</RouterLink
        >
        <RouterLink
          to="/about"
          class="hover:text-xl transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
          active-class="underline decoration-indigo-300"
          >About Me</RouterLink
        >
      </div>

      <!-- 右側 GitHub 連結 -->
      <div class="flex items-center space-x-4">
        <a
          href="https://github.com/huaji55"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          class="hover:text-indigo-300"
        >
          <!-- GitHub SVG icon -->
          <svg
            class="w-6 h-6 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path
              d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.292 3.438 9.792 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.046.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.1.823 2.22 0 1.604-.015 2.896-.015 3.286 0 .322.217.694.825.576C20.565 22.085 24 17.584 24 12.297 24 5.67 18.627.297 12 .297z"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// 沒有額外腳本，純 UI 元件
</script>

<style scoped>
/* 你也可以加些自訂 CSS */
</style>
