<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Event } from '@/types/Event'
import axios from 'axios'
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { formatEventDate } from '@/utils/formatDate'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const route = useRoute()
const event = ref<Event | null>(null)
const loading = ref(true)

onMounted(async () => {
  const eventId = route.params.id as string

  try {
    const response = await axios.get(`https://rendezvous-events.onrender.com/events/${eventId}`)
    event.value = response.data.data.event
    console.log(event.value)
  } catch (error) {
    console.error('Failed to fetch event details:', error)
  } finally {
    loading.value = false
  }
})

 const generateIframeUrl = (lat: number, lng: number) => {
        const baseUrl = 'https://maps.google.com/maps?';
        const zoomLevel = 14;
        const query = `width=100%&height=600&hl=en&q=${lat},${lng}&z=${zoomLevel}&output=embed`;
        return baseUrl + query;
    };
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto flex flex-col gap-4 my-5 px-4 sm:px-6 lg:px-8">
    <Navbar />
    
    <div>
      <div v-if="loading">Loading...</div>

      <div v-else-if="event" class="">
        <img :src="event.imageUrl" class="w-full h-[250px] sm:h-[350px] object-cover rounded-lg mb-4" />

        <div class="flex flex-col lg:flex-row gap-8 items-start">
          <!-- event details on the left  -->
          <div class="w-full lg:w-[70%] flex flex-col items-start gap-4">
            <h2 class="text-2xl sm:text-3xl font-bold">{{ event.title }}</h2>

            <div class="flex flex-col sm:flex-row gap-4 flex-wrap">
              <span class="flex items-center gap-2 text-gray-600">
                <CalendarIcon class="w-5 h-5 text-[#9B51E0]"/>
                <p class="text-gray-600">{{ formatEventDate(event.date) }}</p>
              </span>

              <span class="flex items-center gap-2 text-gray-600">
                <ClockIcon class="w-5 h-5 text-[#9B51E0]"/>
                <p>{{ formatTimeString(event.time) }}</p>
              </span>

              <span class="flex items-center gap-2 text-gray-600">
                <MapPinIcon class="w-5 h-5 text-[#9B51E0]"/>
                <p class="text-gray-600">{{ event.address }}, {{ event.city }}, {{ event.country }}</p>
              </span>

              <span class="flex items-center gap-2 text-gray-600">
                <UserIcon class="w-5 h-5 text-[#9B51E0]"/>
                <p class="text-gray-600">{{ event.organizer.name }}</p>
              </span>
            </div>

            <div class="w-full">
              <h2 class="text-lg font-medium my-6">Event Description</h2>
              <p class="text-gray-700">{{ event.description }}</p>
            </div>

            <div class="w-full">
              <h2 class="font-medium my-6">Tickets Pricing</h2>

              <div class="grid grid-cols-2 gap-4 mt-2">
                <span class="">
                  <h2 class="text-xl font-medium">Single</h2>
                  <p class="text-[#9B51E0] text-lg font-medium">NGN {{ event.price }}</p>
                </span>

                <span class="">
                  <h2 class="text-lg font-medium">Pairing</h2>
                  <p class="text-[#9B51E0] text-lg font-medium">NGN {{ event.price }}</p>
                </span>
              </div>
            </div>

            <nuxt-link to="#" class="px-6 py-3 mt-6 bg-[#783EAD] text-white rounded-lg block w-full sm:w-auto text-center hover:bg-[#9B51E0] transition-colors">Buy Now</nuxt-link>

          </div>

          <!-- right side with map and contact layout -->
          <div class="w-full lg:w-[30%] space-y-8">
            <div class="">
              <h2 class="text-xl font-medium mb-4">Contact</h2>
              <div class="flex gap-4 justify-start">
                <nuxt-link to={{ `event.twitterUrl` }} class="bg-[#783EAD] text-white p-3 rounded-full hover:bg-[#9B51E0] transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </nuxt-link>
                  
                <nuxt-link to="" class="bg-[#783EAD] text-white p-3 rounded-full hover:bg-[#9B51E0] transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </nuxt-link> 

                <nuxt-link to="" class="bg-[#783EAD] text-white p-3 rounded-full hover:bg-[#9B51E0] transition-colors">
                  <EnvelopeIcon class="w-4 h-4" />
                </nuxt-link>
              </div>
            </div>

            <div class="">
              <h2 class="text-xl font-medium mb-4">Directions</h2>
              <iframe
                  :src="generateIframeUrl(Number(event.lat), Number(event.long))"
                  class="w-full h-[300px] sm:h-[400px] rounded-lg"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  >
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <p>Event not found.</p>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>
