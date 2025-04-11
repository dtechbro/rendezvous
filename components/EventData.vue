<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Event } from '@/types/Event'
import { getEvents } from '@/services/api'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  limit?: number
}>()

const allEvents = ref<Event[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await getEvents()
    allEvents.value = props.limit
      ? response.data.data.allEvents.slice(0, props.limit)
      : response.data.data.allEvents
    console.log(allEvents.value)
  } catch (error) {
    console.error('Error fetching events:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto p-4 flex flex-col gap-8 my-2">
    <div v-if="loading">Loading events...</div>
    <div v-else-if="allEvents.length === 0">No events found.</div>

    <div class="grid md:grid-cols-3 gap-5 ">
      <div v-for="event in allEvents" :key="event.id" class="bg-white rounded-lg shadow overflow-clip hover:border-[#9B51E0] border transition duration-300 border-[#E0E0E0] cursor-pointer">
        <img :src="event.imageUrl" alt="" class="w-full h-[200px] object-cover " />
        
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ event.title }}</h3>
          <p>{{ formatEventDate(event.date) }} <span class="mx-1">•</span> {{  formatTimeString(event.time) }}</p>
          <p class="text-sm text-gray-600 my-3">{{ truncateWords(event.description, 15) }}</p>
          <NuxtLink :to="`/events/${event.id}`" class="text-[#432361] flex items-center font-medium gap-2">View details <ArrowUpRightIcon class="size-4"/></NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
