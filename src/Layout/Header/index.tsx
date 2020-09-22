import cn from 'classnames'
import {Container} from 'common/Container'
import {Link} from 'common/Link'
import {memo} from 'react'
const linkCn = 'block px-1 xs:px-5 py-5 tracking-widest font-medium hover:text-red-500'
const activeLinkCn = '-mb-0.5 border-b-4 border-red-500'

export const Header = memo(function Header() {
  return <div>
    <Container className="border-gray-300 uppercase" innerClassName="flex flex-wrap" noDefaultPaddingY>
      <div className="mr-auto py-5 pr-6 tracking-wider font-semibold">Свадьба Владислава и Александры Яковлевых</div>

      <div className="flex">
        <Link href="/" className={cn(linkCn, 'mr-2 xs:mr-6')} activeClassName={activeLinkCn}>Регистрация</Link>
        <Link href="/party" className={linkCn} activeClassName={activeLinkCn}>Вечеринка</Link>
      </div>
    </Container>

    <Container className="pt-10 pb-12 text-white bg-blue-800" noDefaultPaddingY>
      <div className="mb-6 text-3xl leadind-none font-bold">26 сентября 2020 года</div>
      <div className="text-xl">Большое спасибо, что Вы с нами в этот важный день начала нашей совместной истории!</div>
    </Container>
  </div>
})
