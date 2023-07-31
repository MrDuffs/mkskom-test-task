import { memo } from 'react';
import HeadControl from '../head-controls';
import Gallery from '../gallery';
import './style.scss';

function Content() {
  return (
    <div className="content">
      <HeadControl />
      <Gallery />
    </div>
  );
}

export default memo(Content);
