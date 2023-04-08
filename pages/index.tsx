import React from 'react'
import Layout from 'templates/Layout'
import HomeTemplate from 'templates/Home'
import SocialsTemplate from 'templates/Socials'
import { NextPage } from 'next'
import { initializeApollo } from 'services'
import { PAGE } from 'services/PAGE'
import Metatags from 'common/Metatags'
import { MENU } from 'services/MENU'
import { useQuery } from '@apollo/client'
import { MenuItemType } from 'components/Menu'

const Home: NextPage = () => {
  const { data } = useQuery<{ allMenus: MenuItemType[] }>(MENU)

  return (
    <>
      <Metatags />
      <Layout menu={data?.allMenus || []}>
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
