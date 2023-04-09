import React from 'react'
import Layout from 'templates/Layout'
import HomeTemplate from 'templates/Home'
import SocialsTemplate from 'templates/Socials'
import { NextPage } from 'next'
import { initializeApollo } from 'services'
import { PAGE } from 'services/PAGE'
import Metatags from 'common/Metatags'
import { MENU } from 'services/MENU'
import { SOCIAL } from 'services/query/SOCIAL'

const Home: NextPage = () => {
  return (
    <>
      <Metatags />
      <Layout>
        <HomeTemplate />
        <SocialsTemplate />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = 'home'
  const apolloClient = initializeApollo()

  const {
    data: {
      page: { metatags }
    }
  } = await apolloClient.query({
    query: PAGE,
    variables: {
      page
    }
  })

  await apolloClient.query({ query: MENU })
  await apolloClient.query({ query: SOCIAL })

  return {
    props: {
      initialMetaTags: metatags,
      initialDataLayer: {
        pageTypeName: page
      },
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default Home
