import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import * as CSS from './Logo.style'

gsap.registerPlugin(TextPlugin)

const Logo = () => {
  const [words] = useState([
    'Thomaz.',
    'a Father.',
    'a Husband.',
    'a Developer.',
    'a Front-End.'
  ])
  const textRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const masterTl = gsap.timeline({ repeat: -1 })
    words.forEach(word => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })

      tl.to(textRef.current, {
        duration: 1,
        text: word
      })
      masterTl.add(tl)
    })

    gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 })
  }, [textRef, cursorRef, words])

  return (
    <CSS.H1>
      <span>Hi, I'm </span>
      <span ref={textRef}></span>
      <span ref={cursorRef}>_</span>
    </CSS.H1>
  )
}

export default Logo
