<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, defineComponent } from 'vue'

const events = ref([
  {
    id: 1,
    category: 'Music',
    title: 'Live Concert',
    description: 'A live concert with the best artists in town',
    date: '2022-06-15',
    time: '20:00',
    petsAllowed: false,
    organizer: 'Live Concerts Inc.',
  },
  {
    id: 2,
    category: 'Sport',
    title: 'Football Match',
    description: 'A football match between the two best teams in the league',
    date: '2022-06-20',
    time: '19:00',
    petsAllowed: false,
    organizer: 'Football League',
  },
  {
    id: 3,
    category: 'Theater',
    title: 'Shakespeare Play',
    description: 'A play of Shakespeare performed by the best actors in the country',
    date: '2022-06-25',
    time: '18:00',
    petsAllowed: false,
    organizer: 'National Theater',
  },
  {
    id: 4,
    category: 'Music',
    title: 'Rock Concert',
    description: 'A rock concert with the best rock bands in the world',
    date: '2022-07-01',
    time: '21:00',
    petsAllowed: true,
    organizer: 'Rock Concerts Inc.',
  },
  {
    id: 5,
    category: 'Sport',
    title: 'Basketball Game',
    description: 'A basketball game between the two best teams in the league',
    date: '2022-07-05',
    time: '20:00',
    petsAllowed: false,
    organizer: 'Basketball League',
  },
  {
    id: 6,
    category: 'Theater',
    title: 'Comedy Show',
    description: 'A comedy show with the best comedians in the country',
    date: '2022-07-10',
    time: '19:00',
    petsAllowed: false,
    organizer: 'Comedy Club',
  },
  {
    id: 7,
    category: 'Music',
    title: 'Jazz Concert',
    description: 'A jazz concert with the best jazz musicians in the world',
    date: '2022-07-15',
    time: '18:00',
    petsAllowed: false,
    organizer: 'Jazz Concerts Inc.',
  },
  {
    id: 8,
    category: 'Sport',
    title: 'Tennis Match',
    description: 'A tennis match between the two best players in the world',
    date: '2022-07-20',
    time: '17:00',
    petsAllowed: true,
    organizer: 'Tennis Association',
  },
  {
    id: 9,
    category: 'Theater',
    title: 'Drama Play',
    description: 'A drama play performed by the best actors in the country',
    date: '2022-07-25',
    time: '16:00',
    petsAllowed: false,
    organizer: 'National Theater',
  },
  {
    id: 10,
    category: 'Music',
    title: 'Pop Concert',
    description: 'A pop concert with the best pop singers in the world',
    date: '2022-07-30',
    time: '15:00',
    petsAllowed: true,
    organizer: 'Pop Concerts Inc.',
  },
])

defineComponent({
  components: {
    EventCard,
  },
})
</script>

<template>
  <h2>Upcoming Events</h2>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>