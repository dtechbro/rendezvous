// services/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rendezvous-events.onrender.com',
})

export const getEvents = () => api.get('/events') 
