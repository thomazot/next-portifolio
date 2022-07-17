import React, { useCallback, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

import * as CSS from './Sliders.style'
import Slide from './components/Slide'
import { useArrayRef } from 'hooks/useArrayRef'
import { useRouter } from 'next/router'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

type Props = {
  children: React.ReactNode[]
}

const Sliders: React.FC<Props> = ({ children }) => {
  const { asPath, events } = useRouter()
  const [refs, setRefs] = useArrayRef()
  const [anchor, setAnchor] = useState<string | null>()

  useEffect(() => {
    const hash = asPath.split('#')[1] || window.location.hash || 'home'
    // console.log(hash)
    setAnchor(hash)
  }, [asPath])

  useEffect(() => {
    // console.log(!!anchor, !!refs?.current)
    if (anchor && refs?.current) {
      const currentElementIndex = refs.current.findIndex(
        (ref) => !!ref.querySelectorAll(`[data-name=${anchor}]`).length
      )
      // console.log('----------------------------------------------------')
      // console.log(currentElementIndex)
      // console.log('----------------------------------------------------')

      gsap.to(window, {
        duration: 0,
        scrollTo: {
          y: currentElementIndex === 0 ? 0 : refs.current[currentElementIndex],
          offsetY: 0
        }
      })
    }
  }, [events, anchor, refs])

  useEffect(() => {
    gsap.utils.toArray<HTMLDivElement>(refs.current).forEach((ref) => {
      ScrollTrigger.create({
        trigger: ref,
        start: 'top top',
        pin: false,
        pinSpacing: false
      })
    })

    // ScrollTrigger.create({
    //   snap: 1 / (children?.length - 1)
    // })

    // setTimeout(() => {
    //   if (refs?.current)
    //     gsap.to(window, {
    //       duration: 1,
    //       scrollTo: {
    //         y: refs.current[1],
    //         offsetY: 0
    //       }
    //     })
    // }, 1000)
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
