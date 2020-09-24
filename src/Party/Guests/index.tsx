import * as R from 'ramda'
import cn from 'classnames'
import {memo} from 'react'

export const Guests = memo(function Guests(props: {
  className?: string
  guests: string[]
  table: number
  checkedTable?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}) {
  const isChecked = props.table === props.checkedTable

  return <div
    className={cn(
      'p-8 rounded sm:rounded-lg transition-shadow duration-200 cursor-pointer',
      props.className,
      {'hidden sm:block bg-white shadow-lg hover:shadow-xl': !isChecked},
      {'bg-white sm:bg-red-500 sm:text-white shadow-xl sm:hover:shadow-2xl': isChecked},
    )}

    data-table={props.table}
    onClick={props.onClick}
  >
    <div className="mb-5 text-2xl font-bold">Стол {props.table}</div>
    {R.map(guest => <div key={guest}>{guest}</div>, props.guests)}
  </div>
})
