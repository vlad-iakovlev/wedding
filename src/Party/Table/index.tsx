import cn from 'classnames'
import {memo} from 'react'

export const Table = memo(function Table(props: {
  className?: string
  table?: number
  checkedTable?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  children?: React.ReactNode
}) {
  const isChecked = props.table === props.checkedTable

  return <div
    className={cn(
      'flex justify-center items-center text-xs xs:text-sm sm:text-base lg:text-lg text-center',
      'rounded sm:rounded-lg shadow-xl transition-shadow duration-200',
      props.className,
      {'bg-blue-800': props.table && !isChecked},
      {'bg-red-500': props.table && isChecked},
      {'text-white hover:shadow-2xl cursor-pointer': props.table},
    )}

    data-table={props.table}
    onClick={props.onClick}
  >
    {props.table && `Стол ${props.table}`}
    {props.children}
  </div>
})
