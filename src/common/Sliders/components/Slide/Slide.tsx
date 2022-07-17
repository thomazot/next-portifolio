import React, { forwardRef } from 'react'
import { CgMouse } from 'react-icons/cg'
import * as CSS from './Slide.style'

type Props = {
  children?: React.ReactNode | React.ReactNode[]
  next: boolean
}

const Slide: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, next = false },
  ref
) => {
  return (
    <CSS.SlideContainer ref={ref} className="slide">
      <CSS.Slide>{children}</CSS.Slide>
      {next && (
        <CSS.Next>
          <CgMouse />
        </CSS.Next>
      )}
    </CSS.SlideContainer>
  )
}

export default forwardRef(Slide)
