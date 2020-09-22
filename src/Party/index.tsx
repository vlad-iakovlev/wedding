import {Container} from 'common/Container'
import {memo} from 'react'
import {Title} from 'common/Title'

export const Party = memo(function Party() {
  return <div>
    <Container>
      <div className="max-w-3xl">
        <Title>Торжественная часть</Title>

        <div className="mb-6">
          Мы очень рады, что Вы проведете этот вечер вместе нами! Вас ждет море отличного настроения, неожиданных
          поворотов и приятного общения.
        </div>

        <div className="mb-6">Мероприятие будет проходить в формате фуршета.</div>
        <div><span className="font-semibold">Сбор гостей и начало мероприятия:</span> 17:00</div>
        <div><span className="font-semibold">Место проведения мероприятия:</span> Лофт «Красный Октябрь»</div>
        <div><span className="font-semibold">Адрес:</span> Берсеневская набережная 8c1</div>

        <div className="mb-8">
          <span className="font-semibold">Вебсайт площадки:</span>{' '}

          <a
            className="text-red-500"
            href="https://loft-rating.ru/loft-na-krasnom-oktyabre"
            target="_blank"
          >loft-rating.ru/loft-na-krasnom-oktyabre</a>
        </div>

        <div className="xs:p-8 xs:rounded-lg xs:shadow-xl">
          <div className="mb-6 text-xl font-semibold">Не заблудитесь!</div>

          <div className="mb-4">
            Лофт находится на втором этаже. Вход в здание со стороны набережной, проход между домом 8c1 и домом 6c4.
            Дверь в арке.
          </div>

          <img className="mb-8 w-full rounded-lg" src={require('./assets/loft-photo.png')} />
          <div className="mb-6 text-xl font-semibold">Схема прохода</div>
          <img className="mb-6 w-full rounded-lg" src={require('./assets/loft-route.png')} />

          <a className="inline-flex items-center hover:text-red-500" href="https://yandex.ru/maps/-/CCQ3Q8WckB" target="_blank">
            <span className="mr-3 font-semibold uppercase">Посмотреть на Яндекс.Картах</span>

            <div className="bg-gray-200 rounded">
              <div className="ml-1 mb-1 text-2xl leading-none text-red-500 transform -rotate-45">➤</div>
            </div>
          </a>
        </div>
      </div>
    </Container>

    <Container className="bg-gray-200">
      <div className="max-w-3xl">
        <Title>План рассадки</Title>
        <div>Скоро :)</div>
      </div>
    </Container>
  </div>
})
