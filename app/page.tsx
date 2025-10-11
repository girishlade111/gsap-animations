"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// It's best practice to register GSAP plugins in a layout or provider
// but for a single page component, we can do it here.
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const component = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLElement[]>([])

  const addToRefs = (el: HTMLElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- SECTION 1: FADE AND SLIDE UP ---
      gsap.fromTo(
        sectionsRef.current[0].querySelectorAll("h1, p"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionsRef.current[0],
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )

      // --- SECTION 2: SCALE AND FADE IN ---
      gsap.fromTo(
        sectionsRef.current[1].querySelectorAll("h1, p"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionsRef.current[1],
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )

      // --- SECTION 3: SLIDE IN FROM SIDES ---
      gsap.fromTo(
        sectionsRef.current[2].querySelector("h1"),
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionsRef.current[2],
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
      gsap.fromTo(
        sectionsRef.current[2].querySelector("p"),
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionsRef.current[2],
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, component)

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <main ref={component} className="bg-background text-foreground">
      <section ref={addToRefs} className="h-screen w-full flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Creative Motion</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-muted-foreground">
          Scroll down to experience animations that bring content to life, making every interaction memorable.
        </p>
      </section>

      <section
        ref={addToRefs}
        className="h-screen w-full flex flex-col items-center justify-center p-8 text-center bg-muted"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Engaging Stories</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-muted-foreground">
          We use GSAP and ScrollTrigger to craft fluid, performant, and captivating web narratives.
        </p>
      </section>

      <section ref={addToRefs} className="h-screen w-full flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Seamless Flow</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-muted-foreground">
          Animations are precisely timed to your scroll, creating a seamless and intuitive user journey.
        </p>
      </section>
    </main>
  )
}
