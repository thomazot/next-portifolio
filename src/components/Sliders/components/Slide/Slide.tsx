import React from 'react'
import { CgMouse } from 'react-icons/cg'
import * as CSS from './Slide.style'

type Props = {
  children?: React.ReactNode | React.ReactNode[]
  next: boolean
}

const Slide: React.FC<Props> = ({ children, next = false }) => {
  return (
    <CSS.SlideContainer className="slide">
      <CSS.Slide>{children}</CSS.Slide>
      {next && (
        <CSS.Next>
          <CgMouse />
        </CSS.Next>
      )}
    </CSS.SlideContainer>
  )
}

export default Slide
