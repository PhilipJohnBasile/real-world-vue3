<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: none;
  margin-bottom: 18px;
  min-height: 6rem;
  border-radius: 8px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  background: #ffffff;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

.event-card:hover {
  transform: scale(1.05);
  box-shadow:
    0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}

.event-card h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.event-card span {
  color: #333;
  font-size: 1rem;
}

.event-link {
  text-decoration: none;
  color: inherit;
}
</style>
