import React from 'react'
import { CgMouse } from 'react-icons/cg'
import * as CSS from './Slide.style'

type Props = {
  next: boolean
}

const Slide: React.FC<Props> = ({ children, next = false }) => {
  return (
    <div className="slide">
      <CSS.Slide>{children}</CSS.Slide>
      {next && (
        <CSS.Next>
          <CgMouse />
        </CSS.Next>
      )}
    </div>
  )
}

export default Slide
