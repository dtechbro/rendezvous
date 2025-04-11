<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'

const categories = [
  { id: 1, name: 'Tech' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Art' },
  { id: 4, name: 'Education' },
  { id: 5, name: 'Sports' },
  { id: 6, name: 'Food' },
  { id: 7, name: 'Health' },
  { id: 8, name: 'Travel' },
  { id: 9, name: 'Fashion' },
  { id: 10, name: 'Business' }
]
</script>

<template>
  <div
    class="bg-cover bg-center h-screen"
    :style="{ backgroundImage: `url('/images/heroImage.png')` }"
  >
    <div class="flex flex-col justify-between max-w-7xl mx-auto h-full px-4 py-8">
      <Navbar />

      <div class="flex flex-col gap-6 md:flex-row md:items-center md:gap-10 mt-8">
        <!-- Text -->
        <div class="text-white text-2xl sm:text-3xl md:text-4xl leading-snug md:w-2/3">
          Ready to Rock? Discover the Hottest Events Here — Your Calendar's New Best Friend!
        </div>

        <!-- Search Box -->
        <div
          class="bg-white flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch p-4 rounded-lg w-full md:w-auto"
        >
          <!-- Search Input -->
          <div
            class="flex items-center gap-2 border-b sm:border-b-0 sm:border-r-2 px-2 sm:px-4 border-[#E0E0E0]"
          >
            <MagnifyingGlassIcon class="size-5 sm:size-6" />
            <input
              type="text"
              placeholder="Search for events"
              class="p-2 w-full focus:outline-none"
            />
          </div>

          <!-- Dropdown + Button -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
            <select
              name="categories"
              id="categories"
              class="px-4 py-2 rounded border border-gray-300"
            >
              <option value="" disabled selected>Select a category</option>
              <option
                v-for="(item, index) in categories"
                :key="index"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>

            <NuxtLink
              class="bg-purple-700 px-6 py-2 rounded-lg text-white text-center"
              to="#"
            >
              Search
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
