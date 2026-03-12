<script setup>
import { ref, computed, onMounted } from 'vue'

const sectionRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; observer.disconnect() } },
    { threshold: 0.15 }
  )
  observer.observe(sectionRef.value)
})

const filters = ['All', 'Brand Campaigns', 'Paid Media', 'SEO', 'Social']

const projects = [
  {
    name: 'NovaSkin',
    category: 'Brand Campaigns',
    result: 'Brand awareness up 210% in Q1',
    gradient: 'linear-gradient(135deg, #1a1612 0%, #2a1f0e 50%, #1a1410 100%)',
    accent: 'rgba(201, 169, 110, 0.15)',
  },
  {
    name: 'Meridian Finance',
    category: 'Paid Media',
    result: '3x ROAS achieved in 60 days',
    gradient: 'linear-gradient(135deg, #0f1418 0%, #0d1a22 50%, #111416 100%)',
    accent: 'rgba(100, 140, 180, 0.1)',
  },
  {
    name: 'Archetype Studio',
    category: 'Brand Campaigns',
    result: 'Complete rebrand, 40% lead increase',
    gradient: 'linear-gradient(135deg, #161214 0%, #201318 50%, #141214 100%)',
    accent: 'rgba(180, 100, 120, 0.1)',
  },
  {
    name: 'Velo Commerce',
    category: 'SEO',
    result: 'Page 1 rankings for 85 target keywords',
    gradient: 'linear-gradient(135deg, #101614 0%, #0e1e18 50%, #101412 100%)',
    accent: 'rgba(80, 160, 120, 0.1)',
  },
  {
    name: 'Pulse Wellness',
    category: 'Social',
    result: '220K followers gained in 6 months',
    gradient: 'linear-gradient(135deg, #161016 0%, #1e0e20 50%, #14101a 100%)',
    accent: 'rgba(160, 100, 200, 0.1)',
  },
  {
    name: 'Crest Legal',
    category: 'Paid Media',
    result: 'Cost per lead reduced by 58%',
    gradient: 'linear-gradient(135deg, #141414 0%, #1c1810 50%, #141210 100%)',
    accent: 'rgba(201, 169, 110, 0.08)',
  },
]

const activeFilter = ref('All')

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

function setFilter(f) {
  activeFilter.value = f
}
</script>

<template>
  <section class="portfolio section-hidden" :class="{ 'section-visible': visible }" id="portfolio" ref="sectionRef">
    <div class="portfolio__inner container">

      <!-- Header -->
      <div class="portfolio__header">
        <p class="portfolio__label">Our Work</p>
        <div class="portfolio__header-row">
          <h2 class="portfolio__heading">
            Campaigns that<br><em>moved the needle</em>
          </h2>

          <!-- Filters -->
          <div class="portfolio__filters" role="tablist" aria-label="Portfolio filters">
            <button
              v-for="f in filters"
              :key="f"
              class="filter-btn"
              :class="{ 'filter-btn--active': activeFilter === f }"
              role="tab"
              :aria-selected="activeFilter === f"
              @click="setFilter(f)"
            >
              {{ f }}
            </button>
          </div>
        </div>
      </div>

      <!-- Grid -->
      <div class="portfolio__grid">
        <article
          v-for="project in filtered"
          :key="project.name"
          class="project-card"
        >
          <!-- Placeholder visual -->
          <div
            class="project-card__thumb"
            :style="{ background: project.gradient }"
          >
            <!-- Inner glow blob -->
            <div
              class="project-card__blob"
              :style="{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${project.accent}, transparent)` }"
            ></div>

            <!-- Hover overlay -->
            <div class="project-card__overlay">
              <span class="project-card__cta">View Case Study ↗</span>
            </div>
          </div>

          <!-- Meta -->
          <div class="project-card__meta">
            <div class="project-card__top">
              <h3 class="project-card__name">{{ project.name }}</h3>
              <span class="project-card__tag">{{ project.category }}</span>
            </div>
            <p class="project-card__result">{{ project.result }}</p>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <p v-if="filtered.length === 0" class="portfolio__empty">
        No projects in this category yet.
      </p>

    </div>
  </section>
</template>

<style scoped>
/* =============================================
   Section
   ============================================= */
.portfolio {
  background-color: var(--color-surface);
  padding-block: var(--section-padding);
  position: relative;
}

.portfolio::before {
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
.portfolio__header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.portfolio__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.portfolio__label::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.portfolio__header-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.portfolio__heading {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.portfolio__heading em {
  font-style: italic;
  color: var(--color-primary);
}

/* =============================================
   Filters
   ============================================= */
.portfolio__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  padding: 0.5rem 0.875rem;
  border: 1px solid var(--color-border);
  background: transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}

.filter-btn:hover {
  color: var(--color-text);
  border-color: rgba(201, 169, 110, 0.3);
}

.filter-btn--active {
  color: var(--color-bg);
  background-color: var(--color-gold);
  border-color: var(--color-gold);
}

.filter-btn--active:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg);
}

/* =============================================
   Grid
   ============================================= */
.portfolio__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* =============================================
   Project card
   ============================================= */
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  transition: border-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  border-color: rgba(201, 169, 110, 0.3);
  transform: translateY(-3px);
}

/* Thumbnail */
.project-card__thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.project-card__blob {
  position: absolute;
  inset: 0;
  transition: opacity 0.4s ease;
}

/* Hover overlay */
.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__cta {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  border-bottom: 1px solid rgba(201, 169, 110, 0.4);
  padding-bottom: 2px;
  transform: translateY(6px);
  transition: transform 0.3s ease;
}

.project-card:hover .project-card__cta {
  transform: translateY(0);
}

/* Meta */
.project-card__meta {
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-top: 1px solid var(--color-border);
  transition: border-color 0.3s ease;
}

.project-card:hover .project-card__meta {
  border-top-color: rgba(201, 169, 110, 0.2);
}

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.project-card__name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-text);
  transition: color 0.3s ease;
}

.project-card:hover .project-card__name {
  color: var(--color-primary);
}

.project-card__tag {
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  background-color: rgba(201, 169, 110, 0.08);
  border: 1px solid rgba(201, 169, 110, 0.15);
  padding: 0.25rem 0.625rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.project-card__result {
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.5;
}

/* =============================================
   Empty state
   ============================================= */
.portfolio__empty {
  text-align: center;
  color: var(--color-muted);
  font-size: 0.9rem;
  padding: 3rem 0;
  letter-spacing: 0.05em;
}

/* =============================================
   Responsive
   ============================================= */
@media (min-width: 768px) {
  .portfolio__header-row {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .portfolio__filters {
    flex-shrink: 0;
    justify-content: flex-end;
  }

  .portfolio__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .portfolio__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
