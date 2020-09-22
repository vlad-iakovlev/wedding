import {memo} from 'react'

export const Title = memo(function Title(props: {children: React.ReactNode}) {
  return <div className="mb-6 xs:mb-10 text-3xl xs:text-40 xs:leading-none font-bold">{props.children}</div>
})
