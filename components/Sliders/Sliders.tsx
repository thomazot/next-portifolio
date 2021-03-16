import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import * as CSS from './Sliders.style'
import Slide from './components/Slide'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: React.ReactNode[]
}

const Sliders: React.FC<Props> = ({ children }) => {
  const refSliders = useRef()

  useEffect(() => {
    gsap.utils.toArray('.slide').forEach((panel: HTMLElement) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      })
    })

    ScrollTrigger.create({
      snap: 1 / 2
    })
  }, [])

  return (
    <CSS.Sliders ref={refSliders}>
      {children.map((child, index) => (
        <Slide key={index}>{child}</Slide>
      ))}
    </CSS.Sliders>
  )
}

export default Sliders
