<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView />
    <FooterSection />
  </div>
</template>
