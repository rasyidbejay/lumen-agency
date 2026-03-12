<script setup>
import PageHero       from '../components/PageHero.vue'
import ServicesSection from '../components/ServicesSection.vue'
import CtaBanner      from '../components/CtaBanner.vue'
</script>

<template>
  <PageHero
    label="What We Do"
    heading="Services built <em>for growth</em>"
    subtext="From brand positioning to paid acquisition — every service we offer is designed to move the needle, not fill a slide deck."
  />
  <ServicesSection />
  <CtaBanner
    heading="Let's talk about <em>your goals.</em>"
    subtext="Every strong engagement starts with an honest conversation. Tell us where you are and where you want to go."
    button-text="Start a Conversation"
    button-to="/contact"
  />
</template>
