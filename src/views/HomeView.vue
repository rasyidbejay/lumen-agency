<script setup>
import HeroSection       from '../components/HeroSection.vue'
import ServicesSection   from '../components/ServicesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CtaBanner         from '../components/CtaBanner.vue'
</script>

<template>
  <HeroSection />
  <ServicesSection :limit="3" />
  <TestimonialsSection />
  <CtaBanner
    heading="Ready to grow <em>your brand?</em>"
    subtext="Let's build something remarkable together."
    button-text="Start a Project"
    button-to="/contact"
  />
</template>
