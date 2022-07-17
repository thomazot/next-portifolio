import React from 'react'
import Head from 'next/head'
import Layout from 'templates/Layout'
import HomeTemplate from 'templates/Home'
import SocialsTemplate from 'templates/Socials'
import { NextPage } from 'next'
import { PORTFOLIO } from 'services/PINNED'
import PinnedsTemplate from 'templates/Pinneds'
import { initializeApollo } from 'services'
import IPinneds from 'types/IPinneds'
import { ISearchRepository } from 'types/ISearchRepository'

const Home: NextPage<IPinneds> = ({ repositories }) => {
  return (
    <>
      <Head>
        <title>
          thomazot - Front End Developer - React,Javascript,Typescript
        </title>
        <meta
          name="description"
          content="Hello, I'm a Front-End developer with more than 14 years of development as a developer today focused on development with React, NextJS."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thomazot.com.br" />
      </Head>
      <Layout>
        <HomeTemplate />
        {repositories && <PinnedsTemplate repositories={repositories} />}
        <SocialsTemplate />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: {
      search: { repos }
    }
  } = await apolloClient.query<ISearchRepository>({
    query: PORTFOLIO
  })

  return {
    props: {
      repositories: repos.map((repository) => repository.repo),
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default Home