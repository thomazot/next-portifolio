import styled from 'styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Loading = styled(AiOutlineLoading3Quarters)`
  animation: loading-spinner 1s linear infinite;

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
