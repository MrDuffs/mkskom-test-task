import { memo, useCallback, useState } from 'react';
import HeadControl from '../../components/head-controls';
import Gallery from '../../components/gallery';
import './style.scss';

function Content() {
  const [layout, setLayout] = useState('flex');

  const callbacks = {
    onChangeLayout: useCallback((layout) => {
      setLayout(layout);
    }, []),
  };

  return (
    <div className="content">
      <HeadControl setLayout={callbacks.onChangeLayout} />
      <Gallery layout={layout} />
    </div>
  );
}

export default memo(Content);
