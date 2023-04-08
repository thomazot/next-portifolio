import styled, { css } from 'styled-components'
import {
  FlexAlignItemsType,
  FlexDirectionType,
  FlexItemType,
  FlexJustifyContentType
} from 'templates/styles/types'

type ViewsProps = {
  center?: boolean
  direction?: FlexDirectionType
  gap?: number | string
  justifyContent?: FlexJustifyContentType
  alignItems?: FlexAlignItemsType
  flexItems?: FlexItemType
}

const modifiedViews = {
  center: css`
    justify-content: center;
    align-items: center;
    min-height: 100%;
    max-height: 100%;
  `
}

const Views = styled.div<ViewsProps>`
  ${({
    center,
    direction,
    gap,
    theme,
    justifyContent,
    alignItems,
    flexItems
  }) => css`
    display: flex;
    flex-direction: ${direction ? direction : 'row'};

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}

    ${flexItems &&
    css`
      align-items: ${flexItems};
    `}

    ${center && modifiedViews['center']}

    ${gap &&
    css`
      gap: ${typeof gap === 'number' ? `${(theme.gap / 2) * gap}px` : gap};
    `}
  `}
`

export default Views
