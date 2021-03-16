import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Socials from '../components/Socials'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>thomazot - Front End Developer</title>
      </Head>
      <Layout>
        <Logo />
        <Socials />
      </Layout>
    </>
  )
}

export default Home
