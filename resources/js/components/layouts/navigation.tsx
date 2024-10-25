import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Icons } from '../icons';
import { useDropdown } from '../../hooks/use-dropdown';
import classNames from 'classnames';

export default function Navigation(): JSX.Element {
  const
    { ref, isOpen, setIsOpen } = useDropdown<HTMLDivElement>(),
    { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-end grow gap-x-3 lg:gap-x-0">
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-white border-b"></div>
      <ul className="hidden sm:flex mr-auto text-blue-500 font-semibold">
        <li>
          <Link
            className={classNames(
              'flex items-center h-8 px-2 transition-colors duration-300 hover:text-blue-800',
              pathname.startsWith(AppRoute.Trips.Index) && 'text-blue-800',
            )}
            to={AppRoute.Trips.Index}
          >
            Поездки
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              'flex items-center h-8 px-2 transition-colors duration-300 hover:text-blue-800',
              pathname.startsWith(AppRoute.Help.Index) && 'text-blue-800',
            )}
            to={AppRoute.Help.Index}
          >
            Центр помощи
          </Link>
        </li>
      </ul>

      <ul className="flex items-center gap-x-3 text-blue-500 font-semibold lg:gap-x-0">
        <li>
          <Link
            className={classNames(
              'flex items-center gap-x-2 lg:px-3 lg:py-1 transition-colors duration-300 hover:text-blue-800 group',
              pathname.startsWith(AppRoute.Search.Trip) && 'text-blue-800 active',
            )}
            to={AppRoute.Search.Trip}
          >
            <Icons.search className="w-7 h-7" width={32} height={32} />
            <span className="sr-only lg:not-sr-only">Искать</span>
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              'flex items-center gap-x-2 lg:px-3 lg:py-1 transition-colors duration-300 hover:text-blue-800 group',
              pathname.startsWith(AppRoute.Publish.Trip) && 'text-blue-800 active',
            )}
            to={AppRoute.Publish.Trip}
          >
            <Icons.add className="w-7 h-7" width={32} height={32} />
            <span className="sr-only lg:not-sr-only">Опубликовать поездку</span>
          </Link>
        </li>
      </ul>

      <div ref={ref} className="relative flex">
        <button
          className={classNames(
            'relative lg:p-2 group',
            (pathname.startsWith(AppRoute.Auth.Index) || isOpen) && 'active',
          )}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Профиль</span>
          <Icons.profile className="w-7 h-7" width={32} height={32} />
          <Icons.caretDown
            className={classNames(
              'absolute bottom-[2px] lg:bottom-[10px] left-1/2 transform -translate-x-1/2 transition-all duration-300 text-white',
              isOpen && '-scale-y-[1]'
            )}
            width={10}
          />
        </button>

        <ul className={classNames(
          'absolute top-[calc(100%+13px)] lg:top-[calc(100%+15px)] right-[-5vw] lg:right-0 flex flex-col bg-white text-blue-500 font-semibold p-2 gap-1 shadow-sm border -z-20 rounded-bl-md lg:rounded-md min-w-max w-72 transform transition-all duration-300',
          isOpen ? 'translate-y-0 visible' : '-translate-y-[110%] invisible'
        )}>
          <li>
            <Link
              className={classNames(
                'flex rounded py-1 p-2 transition-colors hover:bg-blue-50',
                pathname.startsWith(AppRoute.Auth.Login) && 'bg-blue-50'
              )}
              to={AppRoute.Auth.Login}
              onClick={() => setIsOpen(false)}
            >
              Вход
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                'flex rounded py-1 p-2 transition-colors hover:bg-blue-50',
                pathname.startsWith(AppRoute.Auth.Register) && 'bg-blue-50'
              )}
              to={AppRoute.Auth.Register}
              onClick={() => setIsOpen(false)}
            >
              Регистрация
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
