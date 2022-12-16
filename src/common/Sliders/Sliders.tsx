import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

import * as CSS from './Sliders.style'
import Slide from './components/Slide'
import { useArrayRef } from 'hooks/useArrayRef'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

type Props = {
  children: React.ReactNode[]
}

const Sliders: React.FC<Props> = ({ children }) => {
  const [refs, setRefs] = useArrayRef()

  useEffect(() => {
    gsap.utils.toArray<HTMLDivElement>(refs.current).forEach((ref) => {
      ScrollTrigger.create({
        trigger: ref,
        start: 'top top',
        pin: false,
        pinSpacing: false
      })
    })

    ScrollTrigger.create({
      snap: 1 / (children?.length - 1)
    })
  }, [children.length, refs])

  return (
    <CSS.Sliders>
      {children.map((child, index) => (
        <Slide ref={setRefs} key={index} next={index < children.length - 1}>
          {child}
        </Slide>
      ))}
    </CSS.Sliders>
  )
}

export default Sliders
