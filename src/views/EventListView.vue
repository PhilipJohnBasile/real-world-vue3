<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, defineComponent, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const events = ref(null)

onMounted(async () => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})

defineComponent({
  components: {
    EventCard
  }
})
</script>

<template>
  <h2>Upcoming Events</h2>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
}

h2 {
  text-align: center;
  color: #333;
  padding: 1rem 0;
}
</style>
