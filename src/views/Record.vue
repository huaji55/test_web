<template>
  <div class="max-w-5xl mx-auto px-6 mt-10">
    <h1 class="text-4xl font-bold mb-8 text-indigo-700">My Personal Records</h1>

    <!-- 照片牆 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Photo Gallery</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <img
          v-for="photo in photos"
          :key="photo.id"
          :src="photo.url"
          :alt="photo.caption"
          class="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          @click="viewPhoto(photo)"
        />
      </div>
    </section>

    <!-- 影片牆 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Video Gallery</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <video
          v-for="video in videos"
          :key="video.id"
          class="w-full rounded-lg shadow-md"
          controls
          preload="metadata"
          :poster="video.poster"
        >
          <source :src="video.url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <!-- 簡短文字紀錄 -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Notes</h2>
      <ul class="space-y-4">
        <li
          v-for="note in notes"
          :key="note.id"
          class="p-4 border rounded-lg bg-gray-50 shadow-sm"
        >
          <p class="text-gray-700">{{ note.content }}</p>
          <p class="text-sm text-gray-400 mt-2">{{ formatDate(note.date) }}</p>
        </li>
      </ul>
    </section>

    <!-- Modal for viewing photo -->
    <div
      v-if="selectedPhoto"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click="selectedPhoto = null"
    >
      <img
        :src="selectedPhoto.url"
        :alt="selectedPhoto.caption"
        class="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Photo {
  id: number
  url: string
  caption: string
}

interface Video {
  id: number
  url: string
  poster?: string
}

interface Note {
  id: number
  content: string
  date: string
}

const photos = ref<Photo[]>([
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    caption: 'Sunset at the beach',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    caption: 'Mountain hiking',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    caption: 'City skyline at night',
  },
])

const videos = ref<Video[]>([
  {
    id: 1,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
  },
  {
    id: 2,
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
  },
])

const notes = ref<Note[]>([
  {
    id: 1,
    content: 'Went hiking at the mountains, the view was breathtaking!',
    date: '2025-05-15',
  },
  {
    id: 2,
    content: 'Finished reading a great book about AI ethics.',
    date: '2025-05-22',
  },
])

const selectedPhoto = ref<Photo | null>(null)

function viewPhoto(photo: Photo) {
  selectedPhoto.value = photo
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
