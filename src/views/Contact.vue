<template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-indigo-700">Contact Me</h2>
    <form @submit.prevent="submitForm" novalidate>
      <div class="mb-4">
        <label class="block mb-1 font-semibold" for="name">Name</label>
        <input v-model="form.name" id="name" type="text" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-4">
        <label class="block mb-1 font-semibold" for="email">Email</label>
        <input v-model="form.email" id="email" type="email" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div class="mb-4">
        <label class="block mb-1 font-semibold" for="message">Message</label>
        <textarea v-model="form.message" id="message" rows="4" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
      </div>
      <button type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition">
        Send
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function submitForm() {
  if (!form.name || !form.email || !form.message) {
    alert('Please fill out all fields!')
    return
  }
  // 這裡可以接後端 API 或用 emailjs 之類的服務
  alert(`Thanks, ${form.name}! Your message has been sent.`)

  // 清空表單
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>