import React, { useEffect, useRef } from 'react'
import * as CSS from './Slide.style'

const Slide: React.FC = ({ children }) => {
  return (
    <div className="slide">
      <CSS.Slide>{children}</CSS.Slide>
    </div>
  )
}

export default Slide
