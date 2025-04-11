<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="max-w-7xl mx-auto p-4 flex flex-col gap-8 my-10">
    <!-- Header Section -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h2 class="font-medium text-2xl">Trending Events</h2>
      <nuxt-link
        to="/events"
        class="flex items-center gap-2 text-[#432361] font-medium whitespace-nowrap"
      >
        View all trending events
        <ArrowUpRightIcon class="size-5 text-[#432361]" />
      </nuxt-link>
    </div>

    <!-- Event Component -->
    <EventData :limit="3" />
  </div>
</template>
