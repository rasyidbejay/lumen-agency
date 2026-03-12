<script setup>
import { computed, ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const sectionRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; observer.disconnect() } },
    { threshold: 0.15 }
  )
  observer.observe(sectionRef.value)
})

const year = computed(() => new Date().getFullYear())

const serviceLinks = [
  'Brand Strategy',
  'Performance Marketing',
  'SEO & Content',
  'Social Media',
  'Email Marketing',
]

const companyLinks = [
  { label: 'About',        to: '/about' },
  { label: 'Portfolio',    to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact',      to: '/contact' },
  { label: 'Careers',      to: '/careers' },
]

const socials = [
  { symbol: 'in', label: 'LinkedIn',   href: '#' },
  { symbol: '⊗',  label: 'Instagram',  href: '#' },
  { symbol: '𝕏',  label: 'X / Twitter', href: '#' },
]

</script>

<template>
  <footer class="footer section-hidden" :class="{ 'section-visible': visible }" ref="sectionRef">
    <!-- Top border accent -->
    <div class="footer__accent" aria-hidden="true"></div>

    <div class="footer__body container">

      <!-- Col 1: Brand -->
      <div class="footer__brand">
        <RouterLink to="/" class="footer__logo">
          Lum<span class="footer__logo-accent">è</span>n
        </RouterLink>
        <p class="footer__tagline">Clarity that converts.</p>
        <p class="footer__desc">
          A marketing &amp; growth agency based in Sydney, Australia.
        </p>
      </div>

      <!-- Col 2: Services -->
      <div class="footer__col">
        <p class="footer__col-heading">Services</p>
        <ul class="footer__links">
          <li v-for="service in serviceLinks" :key="service">
            <RouterLink to="/services" class="footer__link">{{ service }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Col 3: Company -->
      <div class="footer__col">
        <p class="footer__col-heading">Company</p>
        <ul class="footer__links">
          <li v-for="link in companyLinks" :key="link.label">
            <RouterLink :to="link.to" class="footer__link">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Col 4: Get In Touch -->
      <div class="footer__col">
        <p class="footer__col-heading">Get In Touch</p>
        <ul class="footer__links footer__contact-links">
          <li>
            <a href="mailto:hello@lumenagency.co" class="footer__link">
              hello@lumenagency.co
            </a>
          </li>
          <li>
            <a href="tel:+61200000000" class="footer__link">
              +61 2 0000 0000
            </a>
          </li>
        </ul>

        <!-- Socials -->
        <div class="footer__socials">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            class="footer__social"
            :aria-label="s.label"
          >{{ s.symbol }}</a>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="footer__bottom-inner container">
        <p class="footer__copy">
          &copy; {{ year }} Lum<span class="footer__logo-accent">è</span>n Agency. All rights reserved.
        </p>
        <div class="footer__legal">
          <a href="#" class="footer__legal-link">Privacy Policy</a>
          <span class="footer__legal-sep" aria-hidden="true">·</span>
          <a href="#" class="footer__legal-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* =============================================
   Footer
   ============================================= */
.footer {
  background-color: var(--color-bg);
  position: relative;
}

/* Gold gradient top border */
.footer__accent {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold), transparent);
  opacity: 0.6;
}

/* =============================================
   Body grid
   ============================================= */
.footer__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-top: clamp(3rem, 7vw, 5.5rem);
  padding-bottom: clamp(3rem, 7vw, 5.5rem);
}

@media (min-width: 640px) {
  .footer__body {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .footer__body {
    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    gap: 2rem;
  }
}

/* =============================================
   Brand column
   ============================================= */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--color-text);
  display: inline-block;
  transition: color 0.2s ease;
}

.footer__logo:hover {
  color: var(--color-primary);
}

.footer__logo-accent {
  color: var(--color-gold);
}

.footer__tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--color-primary);
  letter-spacing: 0.02em;
}

.footer__desc {
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-muted);
  max-width: 36ch;
}

/* =============================================
   Link columns
   ============================================= */
.footer__col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer__col-heading {
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text);
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__link {
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color-muted);
  transition: color 0.2s ease;
  display: inline-block;
}

.footer__link:hover {
  color: var(--color-primary);
}

.footer__contact-links {
  gap: 0.65rem;
}

/* =============================================
   Socials
   ============================================= */
.footer__socials {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.footer__social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.footer__social:hover {
  color: var(--color-gold);
  border-color: rgba(201, 169, 110, 0.4);
  background-color: rgba(201, 169, 110, 0.05);
}

/* =============================================
   Bottom bar
   ============================================= */
.footer__bottom {
  border-top: 1px solid var(--color-border);
}

.footer__bottom-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
  padding-bottom: 1.75rem;
}

.footer__copy {
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.02em;
}

.footer__legal {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.footer__legal-link {
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--color-muted);
  transition: color 0.2s ease;
}

.footer__legal-link:hover {
  color: var(--color-text);
}

.footer__legal-sep {
  color: var(--color-border);
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .footer__bottom-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
