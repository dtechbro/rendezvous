<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useEventStore } from '@/stores/eventStores'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{ limit?: number }>()

const eventStore = useEventStore()

onMounted(() => {
  eventStore.fetchEvents()
})

const limitedEvents = computed(() => {
  return props.limit ? eventStore.events.slice(0, props.limit) : eventStore.events
})

function truncate(text: string, wordCount: number): string {
  return text.split(' ').slice(0, wordCount).join(' ') + '...'
}

function formatTime(time: string): string {
  const [hour, minute] = time.split(':')
  const date = new Date()
  date.setHours(Number(hour), Number(minute))
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase()
}
</script>

<template>
  <div class="max-w-7xl mx-auto flex flex-col gap-8 my-2">
    <div v-if="eventStore.loading">Loading events...</div>
    <div v-else-if="limitedEvents.length === 0">No events found.</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div
        v-for="event in limitedEvents"
        :key="event.id"
        class="bg-white rounded-lg shadow overflow-clip hover:border-[#9B51E0] border transition duration-300 border-[#E0E0E0] cursor-pointer"
      >
        <img :src="event.imageUrl" alt="" class="w-full h-[180px] sm:h-[200px] object-cover" />
        <div class="p-4">
          <h3 class="text-base sm:text-lg font-semibold">{{ event.title }}</h3>
          <p class="text-sm sm:text-base">{{ formatEventDate(event.date) }} • {{ formatTime(event.time) }}</p>
          <p class="text-xs sm:text-sm text-gray-600 my-3">{{ truncate(event.description, 15) }}</p>
          <NuxtLink :to="`/events/${event.id}`" class="text-[#432361] flex items-center font-medium gap-2 text-sm sm:text-base">
            View details <ArrowUpRightIcon class="size-4"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
