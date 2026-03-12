<script setup>
import PageHero        from '../components/PageHero.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import CtaBanner       from '../components/CtaBanner.vue'
</script>

<template>
  <PageHero
    label="Our Work"
    heading="Campaigns that <em>moved the needle</em>"
    subtext="A selection of engagements where strategy, execution, and obsession with results came together."
  />
  <PortfolioSection />
  <CtaBanner
    heading="Your brand <em>could be next.</em>"
    subtext="We're selective about the clients we take on — which is exactly why we deliver results every time."
    button-text="Start a Project"
    button-to="/contact"
  />
</template>
