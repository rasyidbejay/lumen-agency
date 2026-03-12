<script setup>
import { reactive, ref, onMounted } from 'vue'

const sectionRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; observer.disconnect() } },
    { threshold: 0.15 }
  )
  observer.observe(sectionRef.value)
})

const contactDetails = [
  { symbol: '✦', label: 'hello@lumenagency.co' },
  { symbol: '◎', label: '+61 2 0000 0000' },
  { symbol: '◈', label: 'Sydney, Australia' },
]

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

function validate() {
  errors.name    = form.name.trim()    ? '' : 'Full name is required.'
  errors.email   = !form.email.trim()  ? 'Email address is required.'
                 : !validateEmail(form.email) ? 'Please enter a valid email address.'
                 : ''
  errors.message = form.message.trim() ? '' : 'Message is required.'
  return !errors.name && !errors.email && !errors.message
}

function handleSubmit() {
  if (!validate()) return
  submitted.value = true
}

function resetForm() {
  form.name = form.email = form.company = form.message = ''
  errors.name = errors.email = errors.message = ''
  submitted.value = false
}
</script>

<template>
  <section class="contact section-hidden" :class="{ 'section-visible': visible }" id="contact" ref="sectionRef">
    <div class="contact__inner container">

      <!-- Left: info -->
      <div class="contact__info">
        <p class="contact__label">Get In Touch</p>

        <h2 class="contact__heading">Ready to <em>grow?</em></h2>

        <p class="contact__sub">
          Tell us about your business and goals. We'll respond within 24 hours.
        </p>

        <ul class="contact__details">
          <li
            v-for="detail in contactDetails"
            :key="detail.label"
            class="contact__detail"
          >
            <span class="contact__detail-icon" aria-hidden="true">{{ detail.symbol }}</span>
            <span class="contact__detail-text">{{ detail.label }}</span>
          </li>
        </ul>
      </div>

      <!-- Right: form -->
      <div class="contact__form-wrap">
        <!-- Success state -->
        <div v-if="submitted" class="contact__success">
          <span class="contact__success-icon" aria-hidden="true">✦</span>
          <p class="contact__success-msg">
            Your message has been sent. We'll be in touch soon.
          </p>
          <button class="contact__reset" @click="resetForm">Send another message</button>
        </div>

        <!-- Form -->
        <form v-else class="contact__form" novalidate @submit.prevent="handleSubmit">
          <div class="form-row">
            <!-- Full Name -->
            <div class="form-field" :class="{ 'form-field--error': errors.name }">
              <label class="form-label" for="name">Full Name</label>
              <input
                id="name"
                v-model="form.name"
                class="form-input"
                type="text"
                placeholder="James Whitfield"
                autocomplete="name"
                @blur="errors.name = form.name.trim() ? '' : 'Full name is required.'"
              />
              <p v-if="errors.name" class="form-error" role="alert">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div class="form-field" :class="{ 'form-field--error': errors.email }">
              <label class="form-label" for="email">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                class="form-input"
                type="email"
                placeholder="james@company.com"
                autocomplete="email"
                @blur="errors.email = !form.email.trim() ? 'Email address is required.'
                  : !validateEmail(form.email) ? 'Please enter a valid email address.' : ''"
              />
              <p v-if="errors.email" class="form-error" role="alert">{{ errors.email }}</p>
            </div>
          </div>

          <!-- Company -->
          <div class="form-field">
            <label class="form-label" for="company">
              Company <span class="form-label-optional">(optional)</span>
            </label>
            <input
              id="company"
              v-model="form.company"
              class="form-input"
              type="text"
              placeholder="Meridian Finance"
              autocomplete="organization"
            />
          </div>

          <!-- Message -->
          <div class="form-field" :class="{ 'form-field--error': errors.message }">
            <label class="form-label" for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-input form-textarea"
              placeholder="Tell us about your project and goals…"
              rows="5"
              @blur="errors.message = form.message.trim() ? '' : 'Message is required.'"
            ></textarea>
            <p v-if="errors.message" class="form-error" role="alert">{{ errors.message }}</p>
          </div>

          <button type="submit" class="form-submit">Send Message</button>
        </form>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =============================================
   Section
   ============================================= */
.contact {
  background-color: var(--color-surface);
  padding-block: var(--section-padding);
  position: relative;
}

.contact::before {
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
.contact__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3rem, 7vw, 6rem);
  align-items: start;
}

@media (min-width: 900px) {
  .contact__inner {
    grid-template-columns: 1fr 1.2fr;
  }
}

/* =============================================
   Info (left)
   ============================================= */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact__label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact__label::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--color-gold);
  flex-shrink: 0;
}

.contact__heading {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.contact__heading em {
  font-style: italic;
  color: var(--color-primary);
}

.contact__sub {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--color-muted);
  max-width: 38ch;
}

/* Contact details list */
.contact__details {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding-top: 0.5rem;
}

.contact__detail {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact__detail-icon {
  font-size: 0.875rem;
  color: var(--color-gold);
  width: 1.25rem;
  flex-shrink: 0;
  text-align: center;
  opacity: 0.85;
}

.contact__detail-text {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.02em;
}

/* =============================================
   Form wrapper
   ============================================= */
.contact__form-wrap {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: clamp(1.75rem, 4vw, 2.75rem);
}

/* =============================================
   Form
   ============================================= */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 540px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.form-label-optional {
  color: #444;
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.7rem;
}

.form-input {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.8rem 1rem;
  outline: none;
  transition: border-color 0.25s ease;
  width: 100%;
}

.form-input::placeholder {
  color: #3a3a3a;
}

.form-input:focus {
  border-color: rgba(201, 169, 110, 0.5);
}

.form-field--error .form-input {
  border-color: rgba(200, 80, 80, 0.5);
}

.form-textarea {
  resize: vertical;
  min-height: 8rem;
  line-height: 1.6;
}

.form-error {
  font-size: 0.75rem;
  color: #c85050;
  letter-spacing: 0.02em;
}

/* Submit */
.form-submit {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-bg);
  background-color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: 0.9rem 2.25rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.form-submit:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

/* =============================================
   Success state
   ============================================= */
.contact__success {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1rem 0;
}

.contact__success-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
}

.contact__success-msg {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  font-weight: 400;
  line-height: 1.45;
  color: var(--color-text);
  max-width: 36ch;
}

.contact__reset {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2px;
  cursor: pointer;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.contact__reset:hover {
  color: var(--color-text);
  border-bottom-color: var(--color-muted);
}
</style>
