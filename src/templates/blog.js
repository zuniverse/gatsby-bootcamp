import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost ( slug: { eq: $slug } ) {
      title,
      publishedDate(formatString:"MMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>{(JSON.parse(props.data.contentfulBlogPost.body.raw).content[0].content[0].value)}</div>
      {/* <div>{(JSON.parse(props.data.contentfulBlogPost.body.raw))}</div> */}
      {/* <div>{documentToReactComponents(props.data.contentfulBlogPost.body.raw)}</div> */}
      {console.log(JSON.parse(props.data.contentfulBlogPost.body.raw), JSON.parse(props.data.contentfulBlogPost.body.raw).content[0].content[0].value)}
    </Layout>
  )
}

export default Blog