import {Container} from 'common/Container'
import {memo} from 'react'
import {Title} from 'common/Title'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const Home = memo(function Home() {
  return <Container>
    <div className="max-w-3xl">
      <Title>Регистрация</Title>
      <div className="mb-6">Начало церемонии бракосочетания в 11:30 в Дворце бракосочетания в Коломенском.</div>
      <div><span className="font-semibold">Площадка:</span> Театральная хоромина</div>
      <div><span className="font-semibold">Адрес:</span> пр-т Андропова, 39с69</div>
      <div className="mb-8"><span className="font-semibold">Заезд:</span> пр-т Андропова, 51</div>
    </div>
  </Container>
})
