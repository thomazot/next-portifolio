import styled, { css } from 'styled-components'
import Text from 'common/Text'
import { IconPositionType } from './FieldText'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type InputType = {
  hasIcon?: boolean
  iconPosition?: IconPositionType
}

export const Input = styled.input<InputType>`
  ${({ theme, hasIcon, iconPosition = 'right' }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    border solid 1px ${theme.colors.gray};
    border-radius: ${theme.radius};
    height: 50px;
    width: 100%;
    padding: 0 ${theme.gap / 2}px;

    ${
      hasIcon &&
      css`
        ${iconPosition === 'right'
          ? css`
              padding-right: 40px;
            `
          : css`
              padding-left: 40px;
            `}
      `
    }

    &:focus,
    &:active,
    &:hover {
      border-color: ${theme.colors.primary};
      outline: none;

      ~ span,
      ~ i {
        color: ${theme.colors.primary};
      }
    }
  `}
`
export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    font-size: 16px;
    top: -12px;
    left: 16px;
    background: ${theme.colors.background};
    padding: 5px;
  `}
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
    pointer-events: none;
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

export const Container = styled.label<{ error?: boolean; disabled?: boolean }>`
  ${({ theme, error, disabled }) => css`
    display: block;
    position: relative;
    width: 100%;

    ${error &&
    css`
      ${Input} {
        border-color: ${theme.colors.error};
      }

      ${Label} {
        color: ${theme.colors.error} !important;
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

    ${disabled &&
    css`
      color: ${theme.colors.text};
      opacity: ${theme.opacity};
      pointer-events: none;
    `}
  `}
`

type IconType = {
  iconPosition: IconPositionType
}

export const Icon = styled(Text)<IconType>`
  ${({ iconPosition = 'right' }) => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${iconPosition === 'right'
      ? css`
          right: 16px;
        `
      : css`
          left: 16px;
        `}
  `}
`

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
