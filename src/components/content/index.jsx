import { memo } from 'react';
import HeadControl from '../head-controls';
import './style.scss';

function Content() {
  return (
    <div className="content">
      <HeadControl />
    </div>
  );
}

export default memo(Content);
