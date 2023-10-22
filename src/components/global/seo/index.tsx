import Head from 'next/head'
import React from 'react'
const Seo = ({title}:{title:String}) => {
  return (
    <div>
      <Head>
                    <title>{title || "JN"} – Jaalnet llc.</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
    </div>
  )
}

export default Seo
