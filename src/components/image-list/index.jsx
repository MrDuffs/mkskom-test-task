import React, { memo } from 'react';
import './style.scss';

function ImageList({ list, renderItem, layout }) {
  return (
    <div className={`image-list ${layout}`}>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default memo(ImageList);
