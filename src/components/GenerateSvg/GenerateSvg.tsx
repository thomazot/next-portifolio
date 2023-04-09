import { useEffect, useState } from 'react'
import * as S from './GenerateSvg.styles'

const GenerateSvg = ({ url }: { url: string }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSvg(url: string) {
      try {
        const response = await fetch(url)
        const svgText = await response.text()
        setSvgContent(svgText)
      } catch (error: any) {
        console.log(`Error Generating SVG: ${error.message}`)
      }
    }
    fetchSvg(url)
  }, [url])

  if (!svgContent) return <S.Loading />

  return <i dangerouslySetInnerHTML={{ __html: svgContent }} />
}

export default GenerateSvg
