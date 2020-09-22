import cn from 'classnames'
import {memo} from 'react'

export const Container = memo(function Container(props: {
  className?: string
  innerClassName?: string
  children: React.ReactNode
}) {
  return <div className={cn('grid grid-cols-1fr/minmax(0/360)/1fr', props.className)}>
    <div className={cn('col-start-2 px-10 sm:px-32', props.innerClassName)}>
      {props.children}
    </div>
  </div>
})
