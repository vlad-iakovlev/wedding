import 'public/static/global.css'
import {createElement, Fragment, memo} from 'react'
import {AppProps} from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import {Layout} from 'Layout'

const App = memo(function App(props: AppProps) {
  return <Fragment>
    <Head>
      <title>Свадьба Яковлевых</title>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover"/>
      <meta name="robots" content="noindex" />
    </Head>

    <Layout>{createElement(props.Component, props.pageProps)}</Layout>
  </Fragment>
})

export default App
