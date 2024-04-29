<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #eceff1;
}

nav {
  padding: 30px;
  background-color: #607d8b;
  color: #ffffff;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
}

nav a.router-link-exact-active {
  color: #ffc107;
}

h2 {
  font-size: 20px;
}
</style>
