import { memo } from 'react';
import './style.scss';

function ImageItem({ image, layout }) {
  return (
    <div className={`image-item ${layout}`}>
      <div className={`image-item__image ${layout}`}>
        <img src={image.url} alt={image.id} />
      </div>
      {
        layout === 'flex'
          ? (
            <div className="image-item__title">
              {image.title}
            </div>
          ) : null
      }
    </div>
  );
}

export default memo(ImageItem);
