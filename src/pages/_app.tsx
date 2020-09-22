import 'public/static/global.css'
import {Layout} from 'Layout'
import NextApp from 'next/app'
import React from 'react'

class App extends NextApp {
  render() {
    return <Layout>{React.createElement(this.props.Component, this.props.pageProps)}</Layout>
  }
}

export default App
