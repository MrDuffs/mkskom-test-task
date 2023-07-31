import { memo } from 'react';
import SideControls from '../side-controls';
import Content from '../content';
import './style.scss';

function MainContent() {
  return (
    <div className="main-content">
      <SideControls />
      <Content />
    </div>
  );
}

export default memo(MainContent);
