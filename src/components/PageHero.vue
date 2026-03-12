<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  label:   { type: String, required: true },
  heading: { type: String, required: true },
  subtext: { type: String, default: '' },
})

const sectionRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; observer.disconnect() } },
    { threshold: 0.15 }
  )
  observer.observe(sectionRef.value)
})
</script>

<template>
  <section class="page-hero section-hidden" :class="{ 'section-visible': visible }" ref="sectionRef">
    <div class="page-hero__inner container">
      <p class="page-hero__label">{{ label }}</p>
      <h1 class="page-hero__heading" v-html="heading"></h1>
      <p v-if="subtext" class="page-hero__sub">{{ subtext }}</p>
    </div>
    <div class="page-hero__fade" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.page-hero {
  background-color: var(--color-bg);
  padding-top: clamp(6.5rem, 14vw, 11rem);
  padding-bottom: clamp(2.5rem, 8vw, 6rem);
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* Background radial glow */
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 80%, rgba(201, 169, 110, 0.055) 0%, transparent 70%);
  pointer-events: none;
}

.page-hero__fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none;
}

.page-hero__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.page-hero__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.page-hero__label::before,
.page-hero__label::after {
  content: '';
  display: inline-block;
  width: 1.5rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.page-hero__heading {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
  max-width: 20ch;
}

.page-hero__heading :deep(em) {
  font-style: italic;
  color: var(--color-primary);
}

.page-hero__sub {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-muted);
  max-width: 52ch;
}
</style>
