// stores/eventStore.ts
import { defineStore } from 'pinia'
import { getEvents } from '@/services/api'
import type { Event } from '@/types/Event'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [] as Event[],
    fetched: false,
    loading: false,
  }),
  actions: {
    async fetchEvents() {
      if (this.fetched) return

      this.loading = true
      try {
        const response = await getEvents()
        this.events = response.data.data.allEvents
        this.fetched = true
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        this.loading = false
      }
    }
  }
})
