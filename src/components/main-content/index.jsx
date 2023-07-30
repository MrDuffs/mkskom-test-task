import { memo } from 'react';
import LeftMenu from '../left-menu';
import Profile from '../profile';
import './style.scss';

function MainContent() {
  return (
    <div className="main-content">
      <LeftMenu />
      <Profile />
    </div>
  );
}

export default memo(MainContent);
