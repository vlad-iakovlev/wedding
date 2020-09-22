import {Container} from 'common/Container'
import {memo} from 'react'

export const Party = memo(function Party() {
  return <Container className="py-12">
    <div className="max-w-3xl">
      <div className="mb-10 text-40 leading-extra-tight font-bold">Торжественная часть</div>

      <div className="mb-8">
        <div className="mb-4">
          Мы очень рады, что Вы проведете этот вечер вместе нами! Вас ждет море отличного настроения, неожиданных
          поворотов и приятного общения
        </div>

        <div className="mb-4">Мероприятие будет проходить в формате фуршета. Просим воздержаться от синих тонов</div>
        <div><span className="font-semibold">Сбор гостей и начало мероприятия:</span> 17:00</div>
        <div><span className="font-semibold">Место проведения мероприятия:</span> Лофт «Красный Октябрь»</div>
        <div><span className="font-semibold">Адрес:</span> Берсеневская набережная 8c1</div>

        <div>
          <span className="font-semibold">Вебсайт площадки:</span>{' '}

          <a
            className="text-red-500"
            href="https://loft-rating.ru/loft-na-krasnom-oktyabre"
            target="_blank"
          >loft-rating.ru/loft-na-krasnom-oktyabre</a>
        </div>
      </div>

      <div className="mb-12 p-8 rounded-lg shadow-xl">
        <div className="mb-6 text-xl font-semibold">Не заблудитесь!</div>

        <div className="mb-4">
          Лофт находится на втором этаже. Вход в здание со стороны набережной, проход между домом 8c1 и домом 6c4.
          Дверь в арке
        </div>

        <img className="mb-8 w-full rounded-lg" src={require('./assets/loft-photo.png')} />
        <div className="mb-6 text-xl font-semibold">Схема прохода</div>
        <div>Скоро :)</div>
      </div>

      <div className="mb-10 text-40 leading-extra-tight font-bold">План рассадки</div>
      <div>Скоро :)</div>
    </div>
  </Container>
})
