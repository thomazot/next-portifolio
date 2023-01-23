import styled, { css } from 'styled-components'

export const Container = styled.div`
  --border: #242424;
  --background: #222;
  --background-bottom: #2a2a2a;
  --color: #ccc;
  --color-bottom: #fff;
  --font-size: 5em;
  --radius: 3px;
  --shadow: #222;

  display: block;
  position: relative;
  width: 140px;
  height: 120px;
  perspective-origin: 50% 50%;
  perspective: 300px;
  background-color: var(--background);
  color: var(--color);
  border-radius: var(--radius);
  box-shadow: 0px 10px 10px -10px var(--shadow);

  @keyframes fold {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-180deg);
    }
  }

  @keyframes unfold {
    0% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
`

export const StaticContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
`

const modifiedStatic = {
  top: css`
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    ${StaticContent} {
      transform: translateY(50%);
    }
  `,
  bottom: css`
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    background: var(--background-bottom);
    color: var(--color-bottom);
    ${StaticContent} {
      transform: translateY(-50%);
    }
  `
}

export const Static = styled.span<{ position: 'top' | 'bottom' }>`
  ${({ position }) => css`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 50%;
    overflow: hidden;
    border: 1px solid var(--border);

    ${modifiedStatic[position]}
  `}
`

const modifiedAnimated = {
  fold: css`
    top: 0%;
    align-items: flex-end;
    transform-origin: 50% 100%;
    transform: rotateX(0deg);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    animation: fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal
      forwards;
    border-top: 0.5px solid var(--border);

    ${StaticContent} {
      transform: translateY(50%);
    }
  `,
  unfold: css`
    top: 50%;
    align-items: flex-start;
    transform-origin: 50% 0%;
    transform: rotateX(180deg);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    animation: unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal
      forwards;
    border-bottom: 0.5px solid var(--border);
    background: var(--background-bottom);
    color: var(--color-bottom);

    ${StaticContent} {
      transform: translateY(-50%);
    }
  `
}

export const Animated = styled.span<{ animation: 'fold' | 'unfold' }>`
  ${({ animation }) => css`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    background: var(--background);
    border: 0.5px solid var(--border);

    ${modifiedAnimated[animation]}
  `}
`
