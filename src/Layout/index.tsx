import {Header} from './Header'
import {memo} from 'react'

export const Layout = memo(function Layout(props: {children: React.ReactNode}) {
  return <div className="font-main text-blue-800">
    <Header />
    {props.children}
  </div>
})
