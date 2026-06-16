import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            clsx(styles.link, 'pl-5 pr-5 pt-4 pb-4', {
              [styles.link_active]: isActive
            })
          }
        >
          {({ isActive }) => (
            <>
              <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
              <p
                className={clsx('text text_type_main-default ml-2 mr-10', {
                  text_color_inactive: !isActive
                })}
              >
                Конструктор
              </p>
            </>
          )}
        </NavLink>

        <NavLink
          to='/feed'
          className={({ isActive }) =>
            clsx(styles.link, 'pl-5 pr-5 pt-4 pb-4', {
              [styles.link_active]: isActive
            })
          }
        >
          {({ isActive }) => (
            <>
              <ListIcon type={isActive ? 'primary' : 'secondary'} />
              <p
                className={clsx('text text_type_main-default ml-2', {
                  text_color_inactive: !isActive
                })}
              >
                Лента заказов
              </p>
            </>
          )}
        </NavLink>
      </div>

      <Link to='/' className={styles.logo}>
        <Logo className='' />
      </Link>

      <NavLink
        to='/profile'
        className={({ isActive }) =>
          clsx(styles.link, styles.link_position_last, 'pl-5 pr-5 pt-4 pb-4', {
            [styles.link_active]: isActive
          })
        }
      >
        {({ isActive }) => (
          <>
            <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
            <p
              className={clsx('text text_type_main-default ml-2', {
                text_color_inactive: !isActive
              })}
            >
              {userName || 'Личный кабинет'}
            </p>
          </>
        )}
      </NavLink>
    </nav>
  </header>
);
