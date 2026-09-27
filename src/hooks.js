import { useEffect, useRef, useState, useCallback } from 'react'

// Adds .in to .reveal elements as they scroll into view.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 220) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

export function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

// Copy to clipboard with a transient toast message.
export function useCopy() {
  const [toast, setToast] = useState(null)
  const copy = useCallback(async (text, message = 'Copied to clipboard') => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(message)
    } catch {
      setToast('Copy failed — select the text manually')
    }
    setTimeout(() => setToast(null), 2200)
  }, [])
  return [copy, toast]
}
