<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  heading:    { type: String, required: true },
  subtext:    { type: String, default: '' },
  buttonText: { type: String, default: 'Get Started' },
  buttonTo:   { type: String, default: '/contact' },
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
  <section class="cta section-hidden" :class="{ 'section-visible': visible }" ref="sectionRef">
    <div class="cta__inner container">
      <div class="cta__box">
        <div class="cta__content">
          <h2 class="cta__heading" v-html="heading"></h2>
          <p v-if="subtext" class="cta__sub">{{ subtext }}</p>
        </div>
        <RouterLink :to="buttonTo" class="cta__btn">{{ buttonText }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background-color: var(--color-bg);
  padding-block: var(--section-padding);
  position: relative;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-border), transparent);
}

.cta__box {
  border: 1px solid rgba(201, 169, 110, 0.25);
  background: linear-gradient(135deg, #111 0%, #0d0d0d 50%, #111 100%);
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;
}

/* Corner gold accent */
.cta__box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4rem;
  height: 1px;
  background-color: var(--color-gold);
  opacity: 0.7;
}

.cta__box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 4rem;
  background-color: var(--color-gold);
  opacity: 0.7;
}

/* Bottom-right corner mirror */
.cta__content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
}

.cta__content::after {
  content: '';
  position: absolute;
  bottom: -2.5rem;
  right: -4rem;
  width: 3rem;
  height: 1px;
  background-color: var(--color-gold);
  opacity: 0.3;
}

.cta__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
  max-width: 24ch;
}

.cta__heading :deep(em) {
  font-style: italic;
  color: var(--color-primary);
}

.cta__sub {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-muted);
  max-width: 48ch;
}

.cta__btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-bg);
  background-color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: 0.9rem 2.25rem;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.cta__btn:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

@media (max-width: 767px) {
  .cta__btn {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
}

@media (min-width: 768px) {
  .cta__box {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
