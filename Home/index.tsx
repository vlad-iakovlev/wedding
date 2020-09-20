import * as R from 'ramda'
import * as React from 'react'
import { useRouter } from 'next/dist/client/router'

export const Home = React.memo(() => {
  const router = useRouter()
  const name = R.compose(R.ifElse(R.is(Array), R.join(','), R.identity), R.propOr('World', 'name'))(router.query)

  return (
    <h1 className="mt-10 text-3xl text-center">
      Hello
      {' '}
      {name}
      {' '}
      !
    </h1>
  )
})
