<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { label: 'Services',     to: '/services' },
  { label: 'About',        to: '/about' },
  { label: 'Portfolio',    to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact',      to: '/contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">

      <!-- Logo -->
      <RouterLink to="/" class="nav__logo">
        Lum<span class="nav__logo-accent">è</span>n
      </RouterLink>

      <!-- Desktop links -->
      <nav class="nav__links" aria-label="Primary navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- Desktop CTA -->
      <RouterLink to="/contact" class="nav__cta">
        Get Started
      </RouterLink>

      <!-- Hamburger -->
      <button
        class="nav__hamburger"
        :class="{ 'nav__hamburger--open': menuOpen }"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- Mobile menu -->
    <div class="nav__mobile" :class="{ 'nav__mobile--open': menuOpen }" :aria-hidden="!menuOpen">
      <nav class="nav__mobile-links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav__mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/contact" class="nav__cta nav__cta--mobile" @click="closeMenu">
          Get Started
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* ---- Base ---- */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.nav--scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.45);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
}

/* ---- Logo ---- */
.nav__logo {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--color-text);
  flex-shrink: 0;
  transition: color 0.2s ease;
  text-decoration: none;
}

.nav__logo:hover {
  color: var(--color-primary);
}

.nav__logo-accent {
  color: var(--color-gold);
}

/* ---- Desktop nav links ---- */
.nav__links {
  display: none;
  gap: 2.25rem;
}

.nav__link {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  position: relative;
  transition: color 0.2s ease;
  text-decoration: none;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-gold);
  transition: width 0.3s ease;
}

.nav__link:hover,
.nav__link.router-link-active {
  color: var(--color-text);
}

.nav__link:hover::after,
.nav__link.router-link-active::after {
  width: 100%;
}

/* ---- CTA button ---- */
.nav__cta {
  display: none;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: 0.55rem 1.4rem;
  transition: background-color 0.25s ease, color 0.25s ease;
  text-decoration: none;
}

.nav__cta:hover {
  background-color: var(--color-gold);
  color: var(--color-bg);
}

/* ---- Hamburger ---- */
.nav__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  padding: 0.375rem;
}

.nav__hamburger span {
  display: block;
  height: 1px;
  background-color: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
  transform-origin: center;
}

.nav__hamburger span:nth-child(1) { width: 100%; }
.nav__hamburger span:nth-child(2) { width: 70%; }
.nav__hamburger span:nth-child(3) { width: 100%; }

.nav__hamburger--open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
  width: 100%;
}
.nav__hamburger--open span:nth-child(2) {
  opacity: 0;
  width: 0;
}
.nav__hamburger--open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
  width: 100%;
}

/* ---- Mobile menu ---- */
.nav__mobile {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav__mobile--open {
  max-height: 28rem;
}

.nav__mobile-links {
  display: flex;
  flex-direction: column;
  padding: 1.5rem var(--container-padding) 2rem;
  gap: 0.25rem;
}

.nav__mobile-link {
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: color 0.2s ease;
  text-decoration: none;
}

.nav__mobile-link:hover,
.nav__mobile-link.router-link-active {
  color: var(--color-text);
}

.nav__cta--mobile {
  display: inline-flex;
  align-self: flex-start;
  margin-top: 1.25rem;
}

/* ---- Responsive: tablet & up ---- */
@media (min-width: 768px) {
  .nav__links {
    display: flex;
  }

  .nav__cta {
    display: inline-flex;
  }

  .nav__hamburger {
    display: none;
  }

  .nav__mobile {
    display: none;
  }
}
</style>
