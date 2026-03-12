<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const visible = ref(false)

onMounted(() => { setTimeout(() => { visible.value = true }, 100) })
</script>

<template>
  <section class="hero section-hidden" :class="{ 'section-visible': visible }" id="hero" ref="sectionRef">
    <div class="hero__inner container">

      <!-- Left: copy -->
      <div class="hero__content">
        <p class="hero__label">Marketing &amp; Growth Agency</p>

        <h1 class="hero__headline">
          We turn brands into<br>
          <em>market leaders</em>
        </h1>

        <p class="hero__sub">
          Lumèn builds growth systems for ambitious companies.
          Strategy, execution, and results — with clarity.
        </p>

        <div class="hero__actions">
          <a href="#contact" class="hero__btn hero__btn--filled">Start a Project</a>
          <a href="#portfolio" class="hero__btn hero__btn--outline">View Our Work</a>
        </div>
      </div>

      <!-- Right: abstract visual -->
      <div class="hero__visual" aria-hidden="true">
        <div class="orb"></div>
        <div class="orb__ring orb__ring--1"></div>
        <div class="orb__ring orb__ring--2"></div>
        <div class="orb__ring orb__ring--3"></div>
        <div class="orb__line orb__line--h"></div>
        <div class="orb__line orb__line--v"></div>
        <div class="orb__dot orb__dot--1"></div>
        <div class="orb__dot orb__dot--2"></div>
        <div class="orb__dot orb__dot--3"></div>
      </div>

    </div>

    <!-- Bottom gradient fade -->
    <div class="hero__fade" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
/* =============================================
   Section
   ============================================= */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-bg);
}

/* Subtle radial background glow behind everything */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 30%, rgba(232, 224, 208, 0.03) 0%, transparent 60%);
  pointer-events: none;
}

.hero__fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8rem;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none;
}

/* =============================================
   Layout
   ============================================= */
.hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding-top: clamp(5rem, 10vw, 6rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
  width: 100%;
}

/* =============================================
   Content (left)
   ============================================= */
.hero__content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  animation: fadeUp 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.hero__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.hero__label::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.08;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.hero__headline em {
  font-style: italic;
  color: var(--color-primary);
}

.hero__sub {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-muted);
  max-width: 42ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.5rem;
}

/* ---- Buttons ---- */
.hero__btn {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.85rem 2rem;
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.hero__btn--filled {
  background-color: var(--color-gold);
  color: var(--color-bg);
  border: 1px solid var(--color-gold);
}

.hero__btn--filled:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.hero__btn--outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}

.hero__btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}

/* =============================================
   Visual (right) — CSS orb
   ============================================= */
.hero__visual {
  position: relative;
  width: 100%;
  max-width: 26rem;
  aspect-ratio: 1;
  margin-inline: auto;
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

/* Core glowing orb */
.orb {
  position: absolute;
  inset: 18%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 38% 38%,
    rgba(232, 224, 208, 0.18) 0%,
    rgba(201, 169, 110, 0.22) 35%,
    rgba(201, 169, 110, 0.06) 65%,
    transparent 100%
  );
  box-shadow:
    0 0 60px 10px rgba(201, 169, 110, 0.12),
    0 0 120px 30px rgba(201, 169, 110, 0.06),
    inset 0 0 40px rgba(232, 224, 208, 0.05);
  animation: pulse 6s ease-in-out infinite;
}

/* Concentric rings */
.orb__ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(201, 169, 110, 0.18);
}

.orb__ring--1 {
  inset: 10%;
  animation: spin 28s linear infinite;
  border-style: dashed;
  border-color: rgba(201, 169, 110, 0.1);
}

.orb__ring--2 {
  inset: 3%;
  border-color: rgba(201, 169, 110, 0.08);
  animation: spin 40s linear infinite reverse;
}

.orb__ring--3 {
  inset: -5%;
  border-color: rgba(232, 224, 208, 0.05);
  border-style: dashed;
  animation: spin 55s linear infinite;
}

/* Cross-hair lines through center */
.orb__line {
  position: absolute;
  background: linear-gradient(to right, transparent, rgba(201, 169, 110, 0.15), transparent);
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  transform: translateY(-50%);
}

.orb__line--v {
  background: linear-gradient(to bottom, transparent, rgba(201, 169, 110, 0.15), transparent);
  top: 0;
  bottom: 0;
  left: 50%;
  right: auto;
  width: 1px;
  height: auto;
  transform: translateX(-50%);
}

/* Orbiting dots */
.orb__dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-gold);
  box-shadow: 0 0 8px 2px rgba(201, 169, 110, 0.5);
}

.orb__dot--1 {
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  animation: orbitV 8s ease-in-out infinite;
  opacity: 0.8;
}

.orb__dot--2 {
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  animation: orbitH 11s ease-in-out infinite reverse;
  opacity: 0.6;
  width: 3px;
  height: 3px;
}

.orb__dot--3 {
  bottom: 20%;
  left: 20%;
  animation: orbitDiag 14s ease-in-out infinite;
  opacity: 0.5;
  width: 4px;
  height: 4px;
}

/* =============================================
   Animations
   ============================================= */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.94); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1);    opacity: 1; }
  50%       { transform: scale(1.04); opacity: 0.85; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes orbitV {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(calc(76% - 5px)); }
}

@keyframes orbitH {
  0%, 100% { transform: translateY(-50%) translateX(0); }
  50%       { transform: translateY(-50%) translateX(calc(-80% + 5px)); }
}

@keyframes orbitDiag {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(calc(60% - 5px), calc(-60% + 5px)); }
}

/* =============================================
   Responsive
   ============================================= */
@media (max-width: 480px) {
  .hero__visual {
    max-width: 16rem;
  }
}

@media (min-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-top: 8rem;
    padding-bottom: 6rem;
  }

  .hero__visual {
    max-width: none;
    margin-inline: 0;
  }
}

@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: 55% 45%;
  }
}
</style>
