import React from 'react';
import PageLayout from '../layouts/page-layout';
import { Icons } from '../icons';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import SearchTrip from '../forms/search-trip/search-trip';

export default function MainPage(): JSX.Element {
  return (
    <PageLayout>
      <main>
        <div className="bg-blue-400 pb-36 -mb-36 md:pb-28 md:-mb-28 lg:pb-8 lg:-mb-8 lg:min-h-[272px] bg-vitrin-gradient lg:bg-vitrin-image bg-center bg-cover">
          <h1 className="container text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white py-6">Поездки на ваш выбор по самым низким ценам</h1>
        </div>
        <SearchTrip className="container mb-10 lg:mb-16" />

        <section className="container mb-14">
          <h2 className="sr-only">Преимущества</h2>

          <ul className="text-gray-600 font-semibold flex flex-wrap gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-12 max-w-[1200px] mx-auto">
            <li>
              <span className="flex items-center justify-center w-10 h-10 text-gray-500 mb-3">
                <Icons.coins width={30} height={30} />
              </span>
              <h3 className="text-brand-dark font-bold mb-1">Ваша поездка по низкой цене</h3>
              <p>
                Куда бы вы ни собирались, с попутчиками вы сможете найти свою идеальную поездку среди множества маршрутов и доехать по самой низкой цене.
              </p>
            </li>
            <li>
              <span className="flex items-center justify-center w-10 h-10 text-gray-500 mb-3">
                <Icons.userCard width={33} height={27} />
              </span>
              <h3 className="text-brand-dark font-bold mb-1">Доверяйте своим попутчикам</h3>
              <p>
                Мы стараемся узнать ваших будущих попутчиков как можно лучше. Мы проверяем отзывы, профили и паспортные данные попутчиков, чтобы вы знали, с кем поедете.
              </p>
            </li>
            <li>
              <span className="flex items-center justify-center w-10 h-10 text-gray-500 mb-3">
                <Icons.lightning width={23} height={33} />
              </span>
              <h3 className="text-brand-dark font-bold mb-1">В дорогу за пару кликов!</h3>
              <p>
                Забронировать поездку проще простого. В нашем приложении легко разобраться: мощный алгоритм за пару минут найдет водителя поблизости, и вам останется нажать пару кнопок для брони.
              </p>
            </li>
          </ul>
        </section>

        <section className="bg-brand-dark text-white text-center pt-10 pb-14 lg:text-left lg:py-14">
          <h2 className="sr-only">Важное</h2>

          <div className="container lg:grid lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center mb-14 lg:mb-0">
              <Icons.dangerModal className="max-w-full h-auto" width={340} height={168} />
            </div>
            <div className="flex flex-col items-center">
              <strong className="title flex mb-8">Помогите нам защитить вас от мошенников</strong>
              <p className="font-semibold mb-6">
                Мы прилагаем много усилий для безопасности нашей платформы. Но иногда махинации случаются, и мы хотим, чтобы вы знали о способах защиты и о том, куда о таких случаях сообщать. Чтобы обезопасить себя, следуйте нашим советам.
              </p>
              <Link className="button" to={AppRoute.Scam}>
                Узнать больше
              </Link>
            </div>
          </div>
        </section>

        <section className="container text-center pt-10 pb-[72px] lg:text-left lg:py-14 lg:grid lg:grid-cols-2 lg:items-center">
          <h2 className="sr-only">Для водителей</h2>

          <div className="flex justify-center mb-10">
            <img src="/images/driver.svg" width={331} height={197} alt="Водитель с попутчиками ездят в машине. Вид с салона." />
          </div>
          <div className="flex flex-col items-center">
            <strong className="title text-brand-dark flex mb-6 w-full">Экономьте, когда вы за рулем</strong>
            <p className="text-gray-500 font-semibold mb-6">
              Зарегистрируйте профиль водителя, берите попутчиков и экономьте на бензине. Чтобы опубликовать первую поездку, нужно всего пару минут. Готовы ехать?
            </p>
            <Link className="button" to={AppRoute.Publish.Trip}>
              Опубликовать поездку
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
