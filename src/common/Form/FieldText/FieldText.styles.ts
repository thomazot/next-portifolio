import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    border solid 1px ${theme.colors.gray};
    border-radius: ${theme.radius};
    height: 50px;
    width: 100%;
    padding: 0 ${theme.gap / 2}px;

    &:focus,
    &:active,
    &:hover {
      border-color: ${theme.colors.gray};
      outline: none;
    }
  `}
`
export const Label = styled.span`
  display: block;
  position: absolute;
  font-size: 16px;
  top: -12px;
  left: 16px;
  background: #fff;
  padding: 5px;
`

export const Error = styled.div<{ show?: boolean }>`
  @keyframes ErrorAnimation {
    0% {
      right: -10px;
    }
    25% {
      right: -5px;
    }
    50% {
      right: -10px;
    }
    85% {
      right: -5px;
    }
    100% {
      right: -10px;
    }
  }

  ${({ theme, show }) => css`
    position: absolute;
    top: -10px;
    right: -10px;
    background: ${theme.colors.error};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    visibility: hidden;
    transition: all 0.1s ease-in-out;

    &:before {
      content: '!';
      font-size: 11px;
      transition: all 0.1s ease-in-out;
    }

    ${show &&
    css`
      visibility: visible;
      animation: linear 100ms ErrorAnimation;
    `}
  `}
`

export const Container = styled.label<{ error?: boolean }>`
  ${({ theme, error }) => css`
    display: block;
    position: relative;
    width: 100%;

    ${error &&
    css`
      ${Input} {
        border-color: ${theme.colors.error};
      }

      ${Label} {
        color: ${theme.colors.error};
      }
    `}

    &:hover {
      ${Error} {
        width: auto;
        font-size: 12px;
        border-radius: ${theme.radius};
        padding: 0 16px;
        right: 0;
        top: -20px;

        &:before {
          opacity: 0;
          visibility: hidden;
          position: absolute;
        }
      }
    }
  `}
`
