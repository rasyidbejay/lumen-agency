<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; observer.disconnect() } },
    { threshold: 0.15 }
  )
  observer.observe(sectionRef.value)
})

const testimonials = [
  {
    quote: `Lumèn didn't just run our ads — they rebuilt how we think about growth. Revenue up 180% in one quarter.`,
    name: 'James Whitfield',
    role: 'CEO',
    company: 'Meridian Finance',
    initials: 'JW',
  },
  {
    quote: 'The rebrand they delivered was worth every penny. We finally look like the company we actually are.',
    name: 'Sofia Reyes',
    role: 'Founder',
    company: 'Archetype Studio',
    initials: 'SR',
  },
  {
    quote: `Best marketing investment we've ever made. ROI was clear within the first 30 days.`,
    name: 'Daniel Park',
    role: 'CMO',
    company: 'Velo Commerce',
    initials: 'DP',
  },
]
</script>

<template>
  <section class="testimonials section-hidden" :class="{ 'section-visible': visible }" id="testimonials" ref="sectionRef">
    <div class="testimonials__inner container">

      <!-- Header -->
      <div class="testimonials__header">
        <p class="testimonials__label">Client Results</p>
        <h2 class="testimonials__heading">
          What our clients <em>say</em>
        </h2>
      </div>

      <!-- Cards -->
      <div class="testimonials__grid">
        <article
          v-for="t in testimonials"
          :key="t.name"
          class="t-card"
        >
          <!-- Stars -->
          <div class="t-card__stars" aria-label="5 out of 5 stars">
            <span v-for="n in 5" :key="n" class="t-card__star" aria-hidden="true">★</span>
          </div>

          <!-- Quote -->
          <blockquote class="t-card__quote">
            "{{ t.quote }}"
          </blockquote>

          <!-- Attribution -->
          <footer class="t-card__footer">
            <div class="t-card__avatar" aria-hidden="true">{{ t.initials }}</div>
            <div class="t-card__attr">
              <span class="t-card__name">{{ t.name }}</span>
              <span class="t-card__role">{{ t.role }}, {{ t.company }}</span>
            </div>
          </footer>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =============================================
   Section
   ============================================= */
.testimonials {
  background-color: var(--color-bg);
  padding-block: var(--section-padding);
  position: relative;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-border), transparent);
}

/* =============================================
   Header
   ============================================= */
.testimonials__header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.testimonials__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.testimonials__label::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.testimonials__heading {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.testimonials__heading em {
  font-style: italic;
  color: var(--color-primary);
}

/* =============================================
   Grid
   ============================================= */
.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .testimonials__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* =============================================
   Card
   ============================================= */
.t-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  position: relative;
  transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
}

.t-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, var(--color-gold), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.t-card:hover {
  border-color: rgba(201, 169, 110, 0.45);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.t-card:hover::before {
  opacity: 1;
}

/* Stars */
.t-card__stars {
  display: flex;
  gap: 0.2rem;
}

.t-card__star {
  color: var(--color-gold);
  font-size: 0.875rem;
  line-height: 1;
}

/* Quote */
.t-card__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.125rem, 2vw, 1.3125rem);
  font-weight: 400;
  line-height: 1.55;
  color: var(--color-text);
  letter-spacing: 0.01em;
  flex: 1;
}

/* Footer */
.t-card__footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
}

/* Avatar */
.t-card__avatar {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: var(--color-bg);
  border: 1px solid rgba(201, 169, 110, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  flex-shrink: 0;
  transition: border-color 0.3s ease;
}

.t-card:hover .t-card__avatar {
  border-color: rgba(201, 169, 110, 0.55);
}

/* Attribution text */
.t-card__attr {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.t-card__name {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.02em;
}

.t-card__role {
  font-size: 0.75rem;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.04em;
}
</style>
