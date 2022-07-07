import styled from 'styled-components'

export const Text = styled.p`
  font-size: var(--font-size-text, 1.6rem);
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  line-height: 1;

  @media (max-width: 500px) {
    margin-top: -100px;
  }
`
