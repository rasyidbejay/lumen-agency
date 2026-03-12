<script setup>
import PageHero            from '../components/PageHero.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CtaBanner           from '../components/CtaBanner.vue'

const stats = [
  { value: '120+',  label: 'Clients Scaled' },
  { value: '$40M+', label: 'Revenue Generated' },
  { value: '98%',   label: 'Client Retention' },
]
</script>

<template>
  <PageHero
    label="Client Results"
    heading="What our <em>clients say</em>"
    subtext="Don't take our word for it. Here's what the brands we've grown have to say about working with Lumèn."
  />
  <TestimonialsSection />

  <!-- Stats row -->
  <div class="stats-row">
    <div class="stats-row__inner container">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="stat"
      >
        <span class="stat__value">{{ stat.value }}</span>
        <span class="stat__label">{{ stat.label }}</span>
      </div>
    </div>
  </div>

  <CtaBanner
    heading="Join the brands that <em>chose clarity.</em>"
    subtext="A focused strategy and the right team is all it takes. Let's find out what's possible for your business."
    button-text="Start a Project"
    button-to="/contact"
  />
</template>

<style scoped>
.stats-row {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding-block: clamp(3rem, 5vw, 4.5rem);
}

.stats-row__inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  position: relative;
}

.stat + .stat {
  border-left: 1px solid var(--color-border);
}

.stat__value {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.stat__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
}
</style>
