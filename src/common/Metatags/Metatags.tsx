import { useGlobal } from 'hooks/useGlobal'
import Head from 'next/head'

const Metatags: React.FC = () => {
  const { metaTags, dataLayer } = useGlobal()
  return (
    <Head>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="robots" content={metaTags.robots} />
      <link rel="canonical" href={dataLayer.url} />
    </Head>
  )
}

export default Metatags
