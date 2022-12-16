import { IDataLayer } from 'contexts/GlobalContext'

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export default function gtmVirtualPageView(rest: IDataLayer) {
  window.dataLayer?.push({
    event: 'pageview',
    ...rest
  })
}
