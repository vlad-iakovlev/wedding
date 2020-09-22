import {Container} from 'common/Container'
import {memo} from 'react'

export const Home = memo(function Home() {
  return <Container className="py-12">
    <div className="max-w-3xl">
      <div className="mb-10 text-40 leading-extra-tight font-bold">Регистрация</div>

      <div className="mb-8">
        <div className="mb-4">Начало церемонии бракосочетания в 11:30 в Дворце бракосочетания в Коломенском</div>
        <div><span className="font-semibold">Площадка:</span> Театральная хоромина</div>
        <div><span className="font-semibold">Адрес:</span> пр-т Андропова, 39с69</div>
        <div><span className="font-semibold">Заезд:</span> пр-т Андропова, 51</div>
      </div>

      <div className="mb-8 text-xl">Вы можете присоединиться к Zoom трансляции церемонии</div>

      <a
        className="inline-flex items-center px-10 py-5 text-xl text-white font-semibold tracking-wide bg-blue-800
          rounded-full shadow-xl"

        href="#"
      >Присоединиться</a>
    </div>
  </Container>
})
