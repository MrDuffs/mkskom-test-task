import { memo } from 'react';
import LeftMenu from '../left-menu';
import Profile from '../profile';
import MainContent from '../main-content';
import './style.scss';

function MainPage() {
  return (
    <div className="main-page">
      <LeftMenu />
      <Profile />
      <MainContent />
    </div>
  );
}

export default memo(MainPage);
