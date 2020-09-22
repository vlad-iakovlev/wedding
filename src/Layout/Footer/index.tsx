import { Container } from 'common/Container'
import {memo} from 'react'

export const Footer = memo(function Footer() {
  return <Container className="py-6 text-white bg-blue-800" noDefaultPaddingY>
    &copy; 2020 Владислав Яковлев
  </Container>
})
