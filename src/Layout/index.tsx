import {Footer} from './Footer'
import {Header} from './Header'
import {memo} from 'react'

export const Layout = memo(function Layout(props: {children: React.ReactNode}) {
  return <div className="min-h-screen flex flex-col font-main text-blue-800">
    <Header />
    <div className="flex-1">
      {props.children}
    </div>
    <Footer />
  </div>
})
