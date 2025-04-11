<script setup>
const discoverTab = [
  {
    id: 1,
    imgurl: '/images/onlineEvent.png',
    label: 'Online Events',
  },
  {
    id: 2,
    imgurl: '/images/physicalEvent.png',
    label: 'Physical Events',
  },
  {
    id: 3,
    imgurl: '/images/hybridEvent.png',
    label: 'Hybrid Events',
  },
]
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 items-start px-4 md:px-6 py-10 md:py-30 max-w-7xl mx-auto">
    <!-- Left Section -->
    <div class="md:w-1/3">
      <h2 class="text-2xl font-semibold mb-6">
        Discover a World of Events <br />
        Tailored Just for You.
      </h2>
      <nuxt-link
        to="/events"
        class="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
      >
        View all events
      </nuxt-link>
    </div>

    <!-- Right Section: Event Cards -->
    <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="tab in discoverTab"
        :key="tab.id"
        class="relative rounded-lg overflow-hidden group cursor-pointer"
      >
        <img :src="tab.imgurl" alt="" class="w-full h-48 sm:h-60 object-cover" />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-[#00000080] group-hover:bg-[#43236166] group-hover:bg-opacity-60 transition duration-300 group-hover:border-2 border-[#9B51E0]"
        ></div>

        <!-- Label -->
        <span
          class="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl font-medium z-10 text-center px-2"
        >
          {{ tab.label }}
        </span>
      </div>
    </div>
  </div>
</template>
