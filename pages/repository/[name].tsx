import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { initializeApollo } from 'services'
import { REPOSITORY } from 'services/REPOSITORY'

import IRepository from 'types/IRepository'

import Layout from 'templates/Layout'

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
      <Layout menu={[]} header={true}>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()
  if (!params) return { props: {} }
  const data: IRepository = await apolloClient
    .query({ query: REPOSITORY, variables: { name: params.name } })
    .then((data) => data.data.repositoryOwner.repository)

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
