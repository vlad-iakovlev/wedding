import cn from 'classnames'
import NextLink from 'next/link'
import {UrlObject} from 'url'
import {useRouter} from 'next/router'
type Url = string | UrlObject

export function Link(props: {
  activeClassName?: string
  as?: Url
  children: React.ReactNode
  className?: string
  href: Url
  inactiveClassName?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  rel?: string
  target?: string
  title?: string
}) {
  const router = useRouter()

  return <NextLink as={props.as} href={props.href}>
    <a
      className={cn(
        props.className,
        props.activeClassName && {[props.activeClassName]: router.pathname === props.href},
        props.inactiveClassName && {[props.inactiveClassName]: router.pathname !== props.href},
      )}

      rel={props.rel}
      onClick={props.onClick}
      title={props.title}
      target={props.target}
    >{props.children}</a>
  </NextLink>
}
