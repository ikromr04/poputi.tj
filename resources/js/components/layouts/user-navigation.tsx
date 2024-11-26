import React from 'react';
import { useDropdown } from '../../hooks/use-dropdown';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Icons } from '../icons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/auth-slice/auth-selector';
import { logoutAction } from '../../store/auth-slice/auth-api-actions';
import { getToken } from '../../services/token';

export default function UserNavigation({
  className,
}: {
  className?: string;
}) {
  const
    dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    { ref, isOpen, setIsOpen } = useDropdown<HTMLDivElement>(),
    authorizationStatus = useAppSelector(getAuthStatus);
console.log(getToken());

  return (
    <div ref={ref} className={classNames('relative', className)}>
      <button
        className={classNames(
          'flex items-center gap-2 text-blue-600 p-2 rounded-full hover:text-blue-800 transition-colors duration-300',
          (pathname.startsWith(AppRoute.Auth.Index) || isOpen) && 'text-blue-800',
        )}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Профиль</span>
        <Icons.profile width={32} height={32} />
        <Icons.caretDown className={classNames('transition-all duration-300 transform', isOpen && '-scale-y-100')} width={9} />
      </button>

      <div
        className={classNames(
          'absolute top-[calc(100%+8px)] left-0 border rounded-md py-1 bg-white shadow-sm text text-primary min-w-max transition-all duration-300 lg:right-0 lg:left-auto lg:top-[calc(100%+16px)]',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {authorizationStatus === AuthorizationStatus.Auth
          ?
          <>
            <ul>
              <li>
                <Link
                  className={classNames(
                    'flex w-full items-center h-8 transition-all duration-300 hover:bg-gray-100 px-4',
                    pathname.startsWith(AppRoute.Auth.Trips) && 'bg-blue-50',
                  )}
                  to={AppRoute.Auth.Login}
                  onClick={() => setIsOpen(false)}
                >
                  Ваши поездки
                </Link>
              </li>
              <li>
                <Link
                  className={classNames(
                    'flex w-full items-center h-8 transition-all duration-300 hover:bg-gray-100 px-4',
                    pathname.startsWith(AppRoute.Auth.Profile) && 'bg-blue-50',
                  )}
                  to={AppRoute.Auth.Register}
                  onClick={() => setIsOpen(false)}
                >
                  Профиль
                </Link>
              </li>
            </ul>
            <hr className="flex my-1" />
            <button className="flex w-full items-center h-8 transition-all duration-300 hover:bg-gray-100 px-4" type="button" onClick={() => dispatch(logoutAction())}>
              Выйти
            </button>
          </>
          :
          <ul>
            <li>
              <Link
                className={classNames(
                  'flex w-full items-center h-8 transition-all duration-300 hover:bg-gray-100 px-4',
                  pathname.startsWith(AppRoute.Auth.Login) && 'bg-blue-50',
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
                  'flex w-full items-center h-8 transition-all duration-300 hover:bg-gray-100 px-4',
                  pathname.startsWith(AppRoute.Auth.Register) && 'bg-blue-50',
                )}
                to={AppRoute.Auth.Register}
                onClick={() => setIsOpen(false)}
              >
                Регистрация
              </Link>
            </li>
          </ul>}
      </div>
    </div>
  );
}
