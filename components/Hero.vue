<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'

const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Religious' },
  { id: 4, name: 'Tech' },
  { id: 5, name: 'Health' },
  { id: 6, name: 'Fitness' },
  { id: 7, name: 'Sport' },
  { id: 8, name: 'Education' },
]
</script>

<template>
  <div
    class="bg-cover bg-center h-screen"
    :style="{ backgroundImage: `url('/images/heroImage.png')` }"
  >
    <div class="flex flex-col justify-between max-w-7xl mx-auto h-full px-4 py-8">
      <Navbar />

      <div class="flex flex-col gap-6 md:flex-row md:items-end justify-between md:gap-10 mb-12">
        <!-- Text -->
        <div class="text-white text-2xl sm:text-3xl md:text-4xl leading-snug md:w-[40%]">
          Ready to Rock? Discover the Hottest Events Here — Your Calendar's New Best Friend!
        </div>

        <!-- Search Box -->
        <div
          class="bg-white flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch p-4 md:px-4 md:py-8 rounded-lg w-full md:w-auto"
        >
          <!-- Search Input -->
          <div
            class="flex items-center gap-2 border-b sm:border-b-0 sm:border-r-2 px-2 sm:px-4 border-[#E0E0E0]"
          >
            <MagnifyingGlassIcon class="size-5 sm:size-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search for events"
              class="p-2 w-full focus:outline-none"
            />
          </div>

          <!-- Dropdown + Button -->
          <div class="flex gap-3 sm:gap-5 items-center">
            <select
              name="categories"
              id="categories"
              class="px-4 py-2 w-full rounded"
            >
              <option value="" disabled selected>Category</option>
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
