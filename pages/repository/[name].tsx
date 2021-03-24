import React from 'react'
import { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { initializeApollo } from '../../services'
import REPOSITORY from '../../services/REPOSITORY'
import ReactMarkdown from 'react-markdown'
import IRepository from '../../typings/IRepository'

type Props = {
  data: IRepository
  name: string
}

const Repository: NextPage<Props> = ({ data, name }) => {
  return (
    <>
      <Head>
        <title>thomazot - Repository {name}</title>
      </Head>
      <Layout>
        <div className="zot-container">
          {data && (
            <>
              <ReactMarkdown>{data.object.text}</ReactMarkdown>
            </>
          )}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo()
  const data: IRepository = await apolloClient
    .query({ query: REPOSITORY, variables: { name: params.name } })
    .then(data => data.data.repositoryOwner.repository)

  return {
    props: {
      data,
      name: params.name,
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
