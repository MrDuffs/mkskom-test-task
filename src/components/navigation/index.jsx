import { memo } from 'react';
import menuButton from '../../assets/icons/navigation/menu.svg';
import more from '../../assets/icons/navigation/more.svg';
import user from '../../assets/icons/navigation/user.svg';
import notification from '../../assets/icons/navigation/notification.svg';
import cancel from '../../assets/icons/navigation/cancel.svg';
import SearchForm from '../search-form';
import './style.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__logo logo">
        <button type="button" className="logo__menu-btn">
          <img src={menuButton} alt="menu" />
        </button>
        <div className="logo__title">
          Constructor
        </div>
      </div>
      <nav className="navigation__nav-menu nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link">Dashboard</a>
          </li>
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link">About Us</a>
          </li>
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link">News</a>
          </li>
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link">User Policy</a>
          </li>
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link">Contacts</a>
          </li>
          <li className="nav-menu__item">
            <button type="button" className="nav-menu__btn-more">
              <img src={more} alt="more" />
            </button>
          </li>
        </ul>
      </nav>
      <SearchForm />
      <div className="navigation__right">
        <div className="navigation__user user">
          <div className="user__icon">
            <img src={user} alt="user" />
          </div>
          <div className="user__username">
            Clayton Santos
          </div>
        </div>
        <ul className="navigation__controls controls">
          <li className="controls__item notification">
            <img src={notification} alt="notification" />
          </li>
          <li className="controls__item cancel">
            <img src={cancel} alt="cancel" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Navigation);
