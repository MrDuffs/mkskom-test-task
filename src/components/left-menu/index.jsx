import { memo } from 'react';
import explore from '../../assets/icons/left-menu/explore.svg';
import location from '../../assets/icons/left-menu/location.svg';
import messenger from '../../assets/icons/left-menu/messenger.svg';
import publicon from '../../assets/icons/left-menu/publicon.svg';
import star from '../../assets/icons/left-menu/star.svg';
import trending from '../../assets/icons/left-menu/trending.svg';
import addCircle from '../../assets/icons/left-menu/add_circle.svg';
import avatar1 from '../../assets/images/left-menu/avatar1.jpg';
import avatar2 from '../../assets/images/left-menu/avatar2.jpg';
import avatar3 from '../../assets/images/left-menu/avatar3.jpg';
import avatar4 from '../../assets/images/left-menu/avatar4.jpg';
import './style.scss';

function LeftMenu() {
  return (
    <div className="left-menu">
      <ul className="left-menu__top-menu top-menu">
        <li className="top-menu__item">
          <button type="button">
            <img src={explore} alt="explore" />
          </button>
        </li>
        <li className="top-menu__item">
          <button type="button">
            <img src={location} alt="location" />
          </button>
        </li>
        <li className="top-menu__item">
          <button type="button">
            <img src={messenger} alt="messenger" />
          </button>
        </li>
        <li className="top-menu__item">
          <button type="button">
            <img src={publicon} alt="publicon" />
          </button>
        </li>
        <li className="top-menu__item">
          <button type="button">
            <img src={star} alt="star" />
          </button>
        </li>
        <li className="top-menu__item">
          <button type="button">
            <img src={trending} alt="trending" />
          </button>
        </li>
      </ul>
      <ul className="left-menu__bottom-menu bottom-menu">
        <li className="bottom-menu__item">
          <a href="#" className="bottom-menu__link">
            <img src={avatar1} alt="avatar1" />
          </a>
        </li>
        <li className="bottom-menu__item">
          <a href="#" className="bottom-menu__link">
            <img src={avatar2} alt="avatar2" />
          </a>
        </li>
        <li className="bottom-menu__item">
          <a href="#" className="bottom-menu__link">
            <img src={avatar3} alt="avatar3" />
          </a>
        </li>
        <li className="bottom-menu__item">
          <a href="#" className="bottom-menu__link">
            <img src={avatar4} alt="avatar4" />
          </a>
        </li>
        <li className="bottom-menu__item">
          <button type="button">
            <img src={addCircle} alt="add" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default memo(LeftMenu);
