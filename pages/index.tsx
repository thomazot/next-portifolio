import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Socials from '../components/Socials'
import { NextPage } from 'next'
import PINNED from '../services/PINNED'
import Pinneds from '../components/Pinneds'
import { initializeApollo } from '../services'
import IPinneds from '../typings/IPinneds'

const Home: NextPage<IPinneds> = ({ repositories }) => {
  return (
    <>
      <Head>
        <title>thomazot - Front End Developer - React,Javascript,Typescript</title>
        <meta name="description" content="Hello, my name is Thomaz and I'm a Front-End developer working in development for more than 14 years of development as a developer today focused on development with React, NextJS." />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thomazot.com.br" />
      </Head>
      <Layout>
        <Logo />
        {repositories && <Pinneds repositories={repositories} />}
        <Socials />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const data: IPinneds = await apolloClient
    .query({ query: PINNED })
    .then(data => ({ repositories: data.data.user.pinnedItems.nodes }))

  return {
    props: {
      repositories: data.repositories,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default Home
