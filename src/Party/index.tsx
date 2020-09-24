import {memo, useCallback, useState} from 'react'
import cn from 'classnames'
import {Container} from 'common/Container'
import {Guests} from './Guests'
import {Table} from './Table'
import {Title} from 'common/Title'

const guests = [[
  'Иван Ивлев', 'Анастасия Ивлева', 'Тарас Алехин', 'Анна Алехина', 'Антон Шалимов', 'Галина Лагода',
  'Денис Якшов', 'Ольга Кострыкина',
], [
  'Александр Пезиков', 'Елена Попова', 'Евгений Мудров', 'Александра Мельянова', 'Анна Паничкина', 'Олег Фавстов',
  'Павел Худяков', 'Виктор Воронин',
], [
  'Сергей Скавронский', 'Татьяна Иванова', 'Павел Жаров', 'Кирилл Куц', 'Александр Саркисов', 'Денис Назаренко',
  'Дарья Стефанчина',
], [
  'Марина Бубеева', 'Александра Иванова', 'Алексей Елин', 'Алексей Пахомов', 'Екатерина Кириллова', 'Никита Белич',
  'Ксения Рябых', 'Илья Карпец',
], [
  'Алена Синицына', 'Тимур Петров', 'Александра Пчелинцева', 'Никита Подкуйченко', 'Анастасия Иванова', 'Никита Лаптев',
  'Александра Романова', 'Илья Сластенов',
], [
  'Екатерина Фадеева', 'Екатерина Донцова', 'Никита Купреянов', 'Дмитрий Цыренов', 'Софья Бурцева', 'Иван Киреев',
  'Мария Киреева',
]]

export const Party = memo(function Party() {
  const [checkedTable, setCheckedTable] = useState<number>()

  const toggleTable = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const table = Number(event.currentTarget.dataset.table)
    setCheckedTable(table === checkedTable ? undefined : table)
  }, [checkedTable])

  console.log(checkedTable)

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
            Лофт находится на втором этаже. Вход в здание со стороны набережной, проход между домом 8c1 и домом 6c3.
            Дверь в арке.
          </div>

          <img className="mb-8 w-full rounded-lg" src={require('./assets/loft-photo.png')} />
          <div className="mb-6 text-xl font-semibold">Схема прохода</div>
          <img className="mb-6 w-full rounded-lg" src={require('./assets/loft-route.png')} />

          <a className="inline-flex items-center hover:text-red-500" href="https://yandex.ru/maps/-/CCQ3UCA5DA" target="_blank">
            <span className="mr-3 font-semibold uppercase">Посмотреть на Яндекс.Картах</span>

            <div className="flex-shrink-0 flex justify-center items-center bg-gray-200 rounded">
              <div className="ml-1 mb-1 text-xl leading-none text-red-500 transform -rotate-45">➤</div>
            </div>
          </a>
        </div>
      </div>
    </Container>

    <Container className="bg-gray-200">
      <Title>План рассадки</Title>

      <div className="mb-8 xs:mb-12 sm:mb-16 grid grid-rows-5 grid-cols-23/1fr">
        <div className="pb-4/3" />

        <Table className="col-span-2 col-start-1 row-span-3 row-start-2 bg-red-500 text-white">
          <div className="transform -rotate-90 whitespace-pre sm:transform-none sm:text-sm lg:text-lg font-semibold">
            В ❤ А
          </div>
        </Table>

        <Table
          className="col-span-4 col-start-5 row-span-2 row-start-1"
          table={4}
          checkedTable={checkedTable}
          onClick={toggleTable}
        />

        <Table
          className="col-span-4 col-start-5 row-span-2 row-start-4"
          table={1}
          checkedTable={checkedTable}
          onClick={toggleTable}
        />

        <Table
          className="col-span-4 col-start-10 row-span-2 row-start-1"
          table={5}
          checkedTable={checkedTable}
          onClick={toggleTable}
        />

        <Table
          className="col-span-4 col-start-10 row-span-2 row-start-4"
          table={2}
          checkedTable={checkedTable}
          onClick={toggleTable}
        />

        <Table
          className="col-span-4 col-start-15 row-span-2 row-start-1"
          table={6}
          checkedTable={checkedTable}
          onClick={toggleTable}
        />

        <Table
          className="col-span-4 col-start-15 row-span-2 row-start-4"
          table={3}
          checkedTable={checkedTable}
          onClick={toggleTable}
        />

        <Table className="col-span-3 col-start-21 row-span-5 row-start-1 bg-white">
          <div className="transform -rotate-90 whitespace-pre sm:transform-none">Сцена</div>
        </Table>
      </div>

      <div className={cn(
        'mb-8 xs:mb-10 gap-10',
        'sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3',
        'lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-2',
        {'hidden sm:grid': !checkedTable},
        {'grid': checkedTable},
      )}>
        <Guests guests={guests[0]} table={1} checkedTable={checkedTable} onClick={toggleTable} />
        <Guests guests={guests[1]} table={2} checkedTable={checkedTable} onClick={toggleTable} />
        <Guests guests={guests[2]} table={3} checkedTable={checkedTable} onClick={toggleTable} />
        <Guests guests={guests[3]} table={4} checkedTable={checkedTable} onClick={toggleTable} />
        <Guests guests={guests[4]} table={5} checkedTable={checkedTable} onClick={toggleTable} />
        <Guests guests={guests[5]} table={6} checkedTable={checkedTable} onClick={toggleTable} />
      </div>

      <div>Нумерация столов на схеме — «Не баг, а фича» :)</div>
    </Container>
  </div>
})
