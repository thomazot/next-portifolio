import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Socials from '../components/Socials'
import { NextPage } from 'next'
import PINNED from '../services/PINNED'
// import IPinneds from '../typings/IPinneds'
import Pinneds from '../components/Pinneds'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../services'

const Home: NextPage = () => {
  const { data } = useQuery(PINNED)

  return (
    <>
      <Head>
        <title>thomazot - Front End Developer</title>
      </Head>
      <Layout>
        <Logo />
        {data && <Pinneds repositories={data.user.pinnedItems.nodes} />}
        <Socials />
      </Layout>
    </>
  )
}

// Home.getInitialProps = async () => {
//   const apolloClient = initializeApollo()
//   const repositories = await apolloClient
//     .query({ query: PINNED })
//     .then(data => data.data.user.pinnedItems.nodes)
//   return { repositories }
// }

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient
    .query({ query: PINNED })
    .then(data => data.data.user.pinnedItems.nodes)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default Home
