import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

import * as CSS from './Sliders.style'
import Slide from './components/Slide'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: React.ReactNode[]
}

const Sliders: React.FC<Props> = ({ children }) => {
  const refSliders = useRef()

  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(refSliders.current)

    ScrollTrigger.scrollerProxy('body', {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value
        }
        return bodyScrollBar.scrollTop
      }
    })

    bodyScrollBar.addListener(ScrollTrigger.update)
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
