import Head from 'next/head'
import React from 'react'

const Seo = ({title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    </div>
  )
}

export default Seo
