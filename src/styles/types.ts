export type FlexJustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'

export type FlexDirectionType =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'

export type FlexAlignItemsType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'

export type FlexItemType =
  | 'none'
  | number
  | string
  | {
      grow?: number
      shrink?: number
      basis?: number | string
    }
