import { memo } from 'react';
import './style.scss';

function ImageItem({ image }) {
  return (
    <div className="image-item">
      <div className="image-item__image">
        <img src={image.url} alt={image.id} />
      </div>
      <div className="image-item__title">
        {image.title}
      </div>
    </div>
  );
}

export default memo(ImageItem);
