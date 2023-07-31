import { memo } from 'react';
import ImageItem from '../image-item';
import './style.scss';

function ImageList({ list }) {
  return (
    <div className="image-list">
      {list.map((item) => (
        <ImageItem key={item.id} image={item} />
      ))}
    </div>
  );
}

export default memo(ImageList);
