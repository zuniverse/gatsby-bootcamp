import React from "react"
import { Link } from 'gatsby'

// import Header from '../components/header'
// import Footer from '../components/footer'

import Layout from '../components/layout'
import Head from '../components/head'

// export default function Home() {
//   return <div>Hello world!</div>
// }

const IndexPage = () => {
  return (
    <Layout>
      <Head title="home" />
      <h1>Hello,</h1>
      <h2>I'm Andrew, a full stack dev...</h2>
      <p>Need a dev ? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage
