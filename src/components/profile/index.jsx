import { memo } from 'react';
import avatar from '../../assets/images/profile/avatar1.jpg';
import person from '../../assets/icons/profile/person.svg';
import more from '../../assets/icons/profile/more.svg';
import build from '../../assets/icons/profile/options/build.svg';
import cloud from '../../assets/icons/profile/options/cloud.svg';
import dashboard from '../../assets/icons/profile/options/dashboard.svg';
import file from '../../assets/icons/profile/options/file.svg';
import forum from '../../assets/icons/profile/options/forum.svg';
import group from '../../assets/icons/profile/options/group.svg';
import hot from '../../assets/icons/profile/options/hot.svg';
import note from '../../assets/icons/profile/options/note.svg';
import phone from '../../assets/icons/profile/social/local_phone.svg';
import telegram from '../../assets/icons/profile/social/ic_telegram.svg';
import whatsapp from '../../assets/icons/profile/social/ic_whatsapp.svg';
import reader from '../../assets/icons/profile/social/chrome_reader_mode.svg';
import mail from '../../assets/icons/profile/social/mail.svg';
import './style.scss';

function Profile() {
  return (
    <div className="profile">
      <div className="profile__head">
        <div className="profile__top">
          <div className="profile__buttons">
            <button type="button">
              <img src={person} alt="person" />
            </button>
            <button type="button">
              <img src={more} alt="more" />
            </button>
          </div>
          <div className="profile__card">
            <div className="profile__image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="profile__info">
              <div className="profile__username">
                Hello Alfred Bryant
              </div>
              <div className="profile__email">
                adrain.nader@yahoo.com
              </div>
            </div>
          </div>
        </div>
        <div className="profile__options options">
          <div className="options__line">
            <div className="options__item">
              <img src={dashboard} className="options__icon" alt="dashboard" />
              <div className="options__title">Dashboard</div>
            </div>
            <div className="options__item options__item_active">
              <img src={note} className="options__icon" alt="note" />
              <div className="options__title">Notes</div>
            </div>
          </div>
          <div className="options__line">
            <div className="options__item">
              <img src={file} className="options__icon" alt="Invoice" />
              <div className="options__title">Invoice</div>
            </div>
            <div className="options__item">
              <img src={cloud} className="options__icon" alt="cloud" />
              <div className="options__title">Files</div>
            </div>
          </div>
          <div className="options__line">
            <div className="options__item">
              <img src={hot} className="options__icon" alt="events" />
              <div className="options__title">Events</div>
            </div>
            <div className="options__item">
              <img src={group} className="options__icon" alt="teams" />
              <div className="options__title">Teams</div>
            </div>
          </div>
          <div className="options__line">
            <div className="options__item">
              <img src={forum} className="options__icon" alt="Message" />
              <div className="options__title">Message</div>
            </div>
            <div className="options__item">
              <img src={build} className="options__icon" alt="Settings" />
              <div className="options__title">Settings</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__footer">
        <ul className="profile__social social">
          <li className="social__item">
            <img src={phone} alt="phone" />
          </li>
          <li className="social__item">
            <img src={mail} alt="mail" />
          </li>
          <li className="social__item">
            <img src={reader} alt="reader" />
          </li>
          <li className="social__item">
            <img src={telegram} alt="telegram" />
          </li>
          <li className="social__item">
            <img src={whatsapp} alt="whatsapp" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Profile);
