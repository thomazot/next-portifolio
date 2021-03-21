import React from 'react'
import { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from '../../services'
import REPOSITORY from '../../services/REPOSITORY'
import { useQuery } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const Repository: NextPage = () => {
  const router = useRouter()
  const { name } = router.query

  console.log(name)

  const { data } = useQuery(REPOSITORY, {
    variables: { name }
  })

  return (
    <>
      <Head>
        <title>thomazot - Repository {name}</title>
      </Head>
      <Layout>
        <div className="zot-container">
          {data && (
            <>
              <ReactMarkdown>
                {data.repositoryOwner.repository.object.text}
              </ReactMarkdown>
            </>
          )}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo()
  await apolloClient
    .query({ query: REPOSITORY, variables: { name: params.name } })
    .then(data => data.data)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default Repository
