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

const stats = [
  { value: '120+', label: 'Clients Scaled' },
  { value: '$40M+', label: 'Revenue Generated' },
  { value: '8 Yrs', label: 'In Market' },
]
</script>

<template>
  <section class="about section-hidden" :class="{ 'section-visible': visible }" id="about" ref="sectionRef">
    <div class="about__inner container">

      <!-- Left: copy -->
      <div class="about__content">
        <p class="about__label">Our Story</p>

        <h2 class="about__heading">
          We built Lumèn to close the gap between
          <em>strategy and results</em>
        </h2>

        <div class="about__body">
          <p>
            Too many agencies sell decks. We sell outcomes. Lumèn was founded on a simple
            conviction: that clarity of thinking, applied with precision, is the only reliable
            path to growth. Every engagement begins with honest diagnosis — no fluff, no
            filler, no recycled playbooks.
          </p>
          <p>
            We embed ourselves in your business, learn what actually moves the needle, and
            build systems designed to compound over time. Our work is measured in revenue,
            retention, and market share — not impressions. That discipline is what has kept
            our clients coming back, and our results speaking for themselves.
          </p>
        </div>

        <!-- Stats -->
        <div class="about__stats">
          <div v-for="stat in stats" :key="stat.label" class="stat">
            <span class="stat__value">{{ stat.value }}</span>
            <span class="stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right: photo grid -->
      <div class="about__grid" aria-hidden="true">
        <div class="photo photo--large">
          <div class="photo__inner">
            <span class="photo__tag">Strategy</span>
          </div>
        </div>
        <div class="photo photo--tall">
          <div class="photo__inner">
            <span class="photo__tag">Creative</span>
          </div>
        </div>
        <div class="photo photo--wide">
          <div class="photo__inner">
            <span class="photo__tag">Growth</span>
          </div>
        </div>
        <div class="photo photo--small">
          <div class="photo__inner">
            <span class="photo__tag">Data</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =============================================
   Section
   ============================================= */
.about {
  background-color: var(--color-bg);
  padding-block: var(--section-padding);
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-border), transparent);
}

/* =============================================
   Layout
   ============================================= */
.about__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3rem, 6vw, 5rem);
  align-items: center;
}

@media (min-width: 900px) {
  .about__inner {
    grid-template-columns: 1fr 1fr;
  }
}

/* =============================================
   Content (left)
   ============================================= */
.about__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.about__label::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.about__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 400;
  line-height: 1.12;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.about__heading em {
  font-style: italic;
  color: var(--color-primary);
}

.about__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about__body p {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-muted);
}

/* =============================================
   Stats
   ============================================= */
.about__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
  min-width: 8rem;
  padding-right: 2rem;
  position: relative;
}

.stat + .stat {
  padding-left: 2rem;
  padding-right: 2rem;
  border-left: 1px solid var(--color-border);
}

.stat:last-child {
  padding-right: 0;
}

.stat__value {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 400;
  color: var(--color-text);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* =============================================
   Photo grid (right)
   ============================================= */
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 14rem 10rem;
  gap: 0.75rem;
}

.photo {
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  overflow: hidden;
  transition: border-color 0.3s ease;
  position: relative;
}

.photo:hover {
  border-color: rgba(201, 169, 110, 0.35);
}

/* Noise texture overlay */
.photo::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 30% 30%, rgba(201, 169, 110, 0.04) 0%, transparent 60%);
  pointer-events: none;
}

.photo__inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 1rem 1.25rem;
}

.photo__tag {
  font-size: 0.6875rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.photo:hover .photo__tag {
  opacity: 1;
  transform: translateY(0);
}

/* Asymmetric placement */
.photo--large {
  grid-column: 1;
  grid-row: 1;
  background-color: #181818;
}

.photo--tall {
  grid-column: 2;
  grid-row: 1 / 3;
  background-color: var(--color-surface);
}

.photo--wide {
  grid-column: 1;
  grid-row: 2;
  background-color: #101010;
}

.photo--small {
  display: none; /* absorbed by tall spanning col 2 */
}

/* Gold corner accent */
.photo--large::after,
.photo--tall::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2px;
  background-color: var(--color-gold);
  opacity: 0.5;
}

.photo--wide::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2px;
  height: 2.5rem;
  background-color: var(--color-gold);
  opacity: 0.35;
}

@media (max-width: 480px) {
  .about__stats {
    flex-direction: column;
    gap: 1.25rem;
  }

  .stat {
    padding-right: 0;
    min-width: unset;
    flex: none;
    width: 100%;
  }

  .stat + .stat {
    padding-left: 0;
    padding-right: 0;
    border-left: none;
    border-top: 1px solid var(--color-border);
    padding-top: 1.25rem;
  }

  .stat:last-child {
    padding-right: 0;
  }
}

@media (min-width: 480px) {
  .about__grid {
    grid-template-rows: 16rem 11rem;
  }
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-rows: 18rem 12rem;
  }
}
</style>
