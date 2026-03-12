<script setup>
import PageHero       from '../components/PageHero.vue'
import ContactSection from '../components/ContactSection.vue'

const reassurances = [
  { symbol: '✦', text: 'Response within 24hrs' },
  { symbol: '◎', text: 'No obligation consultation' },
  { symbol: '◈', text: 'Sydney-based team' },
]
</script>

<template>
  <PageHero
    label="Get In Touch"
    heading="Ready to <em>grow?</em>"
    subtext="Tell us about your business and goals. We'll come prepared with ideas, not a pitch deck."
  />
  <ContactSection />

  <!-- Reassurance row -->
  <div class="reassurance">
    <div class="reassurance__inner container">
      <div
        v-for="item in reassurances"
        :key="item.text"
        class="reassurance__item"
      >
        <span class="reassurance__icon" aria-hidden="true">{{ item.symbol }}</span>
        <span class="reassurance__text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reassurance {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding-block: 2.75rem;
}

.reassurance__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 4rem;
}

.reassurance__item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.reassurance__icon {
  font-size: 0.875rem;
  color: var(--color-gold);
  opacity: 0.85;
}

.reassurance__text {
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  color: var(--color-muted);
}
</style>
