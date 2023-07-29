import { memo } from 'react';
import LeftMenu from '../left-menu';
import './style.scss';

function MainContent() {
  return (
    <div className="main-content">
      <LeftMenu />
    </div>
  );
}

export default memo(MainContent);
