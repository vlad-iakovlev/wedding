import cn from 'classnames'
import {memo} from 'react'

export const Container = memo(function Container(props: {
  className?: string
  innerClassName?: string
  noDefaultPaddingY?: boolean
  children: React.ReactNode
}) {
  return <div
    className={cn(
      'grid grid-cols-1fr/minmax(0/360)/1fr',
      props.className,
      {'py-10 xs:py-16': !props.noDefaultPaddingY},
    )}

    style={{
      paddingLeft : 'env(safe-area-inset-left)',
      paddingRight: 'env(safe-area-inset-right)',
    }}
  >
    <div className={cn('col-start-2 px-6 sm:px-12 lg:px-20', props.innerClassName)}>
      {props.children}
    </div>
  </div>
})
