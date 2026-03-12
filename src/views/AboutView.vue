<script setup>
import PageHero            from '../components/PageHero.vue'
import AboutSection        from '../components/AboutSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CtaBanner           from '../components/CtaBanner.vue'
</script>

<template>
  <PageHero
    label="Our Story"
    heading="Built on clarity. <em>Driven by results.</em>"
    subtext="We started Lumèn because we believed the best agencies are the ones that think like operators — not just marketers."
  />
  <AboutSection />
  <TestimonialsSection />
  <CtaBanner
    heading="Work with a team that's <em>invested in your growth.</em>"
    subtext="We take on a limited number of clients each quarter so we can go deep on every engagement."
    button-text="Work With Us"
    button-to="/contact"
  />
</template>
