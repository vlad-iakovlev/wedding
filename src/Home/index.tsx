import {Container} from 'common/Container'
import {memo} from 'react'
import {Title} from 'common/Title'

export const Home = memo(function Home() {
  return <Container>
    <div className="max-w-3xl">
      <Title>Регистрация</Title>
      <div className="mb-6">Начало церемонии бракосочетания в 11:30 в Дворце бракосочетания в Коломенском.</div>
      <div><span className="font-semibold">Площадка:</span> Театральная хоромина</div>
      <div><span className="font-semibold">Адрес:</span> пр-т Андропова, 39с69</div>
      <div className="mb-8"><span className="font-semibold">Заезд:</span> пр-т Андропова, 51</div>
      <div className="mb-6 text-xl">Вы можете присоединиться к Zoom трансляции церемонии:</div>

      <a
        className="inline-flex items-center px-10 py-5 text-xl text-white font-semibold tracking-wide bg-blue-800
          rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-200 ease-in"

        href="https://us04web.zoom.us/j/6260066017?pwd=M1FFN1RsaGJKUFFOdXVNdTYwMlZJdz09"
        target="_blank"
      >Присоединиться</a>
    </div>
  </Container>
})
