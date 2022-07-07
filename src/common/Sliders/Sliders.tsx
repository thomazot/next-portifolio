import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import * as CSS from './Sliders.style'
import Slide from './components/Slide'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: React.ReactNode[]
}

const Sliders: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.slide').forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      })
    })

    ScrollTrigger.create({
      snap: 1 / (children?.length - 1)
    })
  }, [children.length])

  return (
    <CSS.Sliders>
      {children.map((child, index) => (
        <Slide next={index < children.length - 1} key={index}>
          {child}
        </Slide>
      ))}
    </CSS.Sliders>
  )
}

export default Sliders
