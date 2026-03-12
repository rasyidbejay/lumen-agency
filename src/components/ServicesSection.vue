<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  limit: { type: Number, default: 0 },
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

const services = [
  {
    symbol: '◈',
    title: 'Brand Strategy',
    description: 'Positioning, messaging, and identity that sticks in the minds of your ideal customers.',
  },
  {
    symbol: '◎',
    title: 'Performance Marketing',
    description: 'Paid ads that generate real, measurable ROI — no vanity metrics, just results.',
  },
  {
    symbol: '⟡',
    title: 'SEO & Content',
    description: 'Organic growth built on authority and precision. We earn the rankings that matter.',
  },
  {
    symbol: '◇',
    title: 'Social Media',
    description: 'Premium content that builds audiences and drives meaningful action at every touchpoint.',
  },
  {
    symbol: '✦',
    title: 'Email Marketing',
    description: 'Sequences and campaigns crafted to turn cold leads into loyal, paying customers.',
  },
  {
    symbol: '⊹',
    title: 'Conversion Optimization',
    description: 'Data-driven UX fixes that remove friction and lift your numbers — systematically.',
  },
]

const visibleServices = computed(() =>
  props.limit > 0 ? services.slice(0, props.limit) : services
)
</script>

<template>
  <section class="services section-hidden" :class="{ 'section-visible': visible }" id="services" ref="sectionRef">
    <div class="services__inner container">

      <!-- Header -->
      <div class="services__header">
        <p class="services__label">What We Do</p>
        <h2 class="services__heading">Services built<br><em>for growth</em></h2>
      </div>

      <!-- Grid -->
      <div class="services__grid">
        <article
          v-for="service in visibleServices"
          :key="service.title"
          class="card"
        >
          <div class="card__icon">{{ service.symbol }}</div>
          <h3 class="card__title">{{ service.title }}</h3>
          <p class="card__desc">{{ service.description }}</p>
          <div class="card__line" aria-hidden="true"></div>
        </article>
      </div>

      <!-- Preview footer -->
      <div v-if="limit > 0" class="services__preview-footer">
        <RouterLink to="/services" class="services__view-all">
          View All Services ↗
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =============================================
   Section
   ============================================= */
.services {
  background-color: var(--color-surface);
  padding-block: var(--section-padding);
  position: relative;
}

/* Top edge fade from hero */
.services::before {
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
.services__header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.services__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.services__label::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.services__heading {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.services__heading em {
  font-style: italic;
  color: var(--color-primary);
}

/* =============================================
   Grid
   ============================================= */
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background-color: var(--color-border);
  border: 1px solid var(--color-border);
}

/* =============================================
   Card
   ============================================= */
.card {
  position: relative;
  background-color: var(--color-surface);
  padding: clamp(1.75rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition: background-color 0.3s ease;
  cursor: default;
}

/* Gold corner accent on hover */
.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--color-gold), transparent);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.card:hover::after {
  width: 100%;
}

/* Bottom divider line — animates gold on hover */
.card__line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.card:hover .card__line {
  background-color: rgba(201, 169, 110, 0.12);
}

/* Icon */
.card__icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  line-height: 1;
  opacity: 0.85;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card:hover .card__icon {
  opacity: 1;
  transform: scale(1.1);
}

/* Title */
.card__title {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--color-text);
  transition: color 0.3s ease;
}

.card:hover .card__title {
  color: var(--color-primary);
}

/* Description */
.card__desc {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-muted);
  transition: color 0.3s ease;
}

.card:hover .card__desc {
  color: #8a8a8a;
}

/* =============================================
   Responsive
   ============================================= */
@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.services__preview-footer {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
}

.services__view-all {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  border-bottom: 1px solid rgba(201, 169, 110, 0.35);
  padding-bottom: 3px;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.services__view-all:hover {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}
</style>
