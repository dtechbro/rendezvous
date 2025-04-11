<script setup lang="ts">
import { ref } from 'vue'

const navlink = [
  { name: 'Discover', path: '/events' },
  { name: 'About', path: '#' },
  { name: 'FAQs', path: '#' },
  { name: 'Contact us', path: '#' },
]

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-[#FFFFFF99] p-4 rounded-lg">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <nuxt-link to="/" class="text-[#432361] text-3xl font-medium">rendezvous</nuxt-link>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex gap-4">
        <li v-for="link in navlink" :key="link.name">
          <NuxtLink :to="link.path" class="text-[#432361]">{{ link.name }}</NuxtLink>
        </li>
      </ul>

      <!-- Desktop Auth Buttons -->
      <ul class="hidden md:flex gap-4 items-center">
        <li>
          <NuxtLink to="#" class="text-[#432361] px-5 font-medium">Log in</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="bg-[#783EAD] text-white px-5 py-2 rounded-lg">Sign up</NuxtLink>
        </li>
      </ul>

      <!-- Hamburger Icon -->
      <button @click="isOpen = !isOpen" class="md:hidden text-[#432361] text-2xl focus:outline-none">
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="mt-4 flex flex-col gap-4 md:hidden">
      <ul class="flex flex-col gap-2">
        <li v-for="link in navlink" :key="link.name">
          <NuxtLink :to="link.path" class="text-[#432361]">{{ link.name }}</NuxtLink>
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li>
          <NuxtLink to="#" class="text-[#432361] font-medium">Log in</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="bg-[#783EAD] text-white px-5 py-2 rounded-lg w-fit">Sign up</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
