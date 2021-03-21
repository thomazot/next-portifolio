import styled from 'styled-components'

export const Repository = styled.article`
  padding: ${({ theme: { gap } }) => `${gap / 2}px`};
  border: solid 1px var(--color);
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  line-height: 1.3;

  header {
    padding-bottom: ${({ theme: { gap } }) => `${gap / 2}px`};
    font-size: 16px;
    font-weight: 600;
  }

  a {
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media (min-width: 992px) {
    transition: all 0.2s ease-in-out;
    &:hover {
      border-color: var(--contrast);
    }
  }
`
