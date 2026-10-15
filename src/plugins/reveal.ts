import type { Directive } from 'vue'

/**
 * v-reveal: fade+rise an element in when it scrolls into view.
 *
 * Only applied to off-screen sections, so anything visible at load is left
 * untouched (no flash-of-hidden). Adds the .reveal class itself, so templates
 * just use `v-reveal`. Respects prefers-reduced-motion via CSS.
 */
const reveal: Directive<HTMLElement> = {
  mounted(el) {
    if (typeof IntersectionObserver === 'undefined') return

    const rect = el.getBoundingClientRect()
    const visibleAtLoad = rect.top < window.innerHeight && rect.bottom > 0
    if (visibleAtLoad) return

    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-in')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
  },
}

export default reveal
