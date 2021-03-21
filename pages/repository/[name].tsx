import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/dist/client/router'

const Repository: NextPage = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <Head>
        <title>thomazot - Repository {name}</title>
      </Head>
      <Layout>
        <div>
          <h1>{name}</h1>
        </div>
      </Layout>
    </>
  )
}

export default Repository
