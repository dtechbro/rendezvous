import { format } from 'date-fns'

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr)
  return format(date, "eee, MMM do") // "Sun, Oct 3rd"
}

export function formatTimeString(timeStr: string): string {
  const [hourStr, minuteStr] = timeStr.split(':')
  const hour = parseInt(hourStr)
  const minute = parseInt(minuteStr)

  const ampm = hour < 12 ? 'AM' : 'PM'
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12

  // if you want to include minutes even if it's ":00"
  if (minute !== 0) {
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`
  }

  // if you want "4 PM" instead of "4:00 PM"
  return `${formattedHour} ${ampm}`
}
