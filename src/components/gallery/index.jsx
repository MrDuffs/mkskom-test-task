import { memo, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getFlexboxPhotos, getGridPhotos } from '../../store/reducers/photos/actions';
import ImageList from '../image-list';
import ImageItem from '../image-item';
import './style.scss';

function Gallery({ layout }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (layout === 'flex') {
      dispatch(getFlexboxPhotos());
    } else if (layout === 'grid') {
      dispatch(getGridPhotos());
    }
  }, [layout, dispatch]);

  const select = useSelector((state) => ({
    photos: state.photosList.data,
    loading: state.photosList.loading,
  }), shallowEqual);

  const renders = {
    imageItem: useCallback((item) => (
      <ImageItem image={item} layout={layout} />
    ), [layout]),
  };

  return (
    <div className="gallery">
      {
        select.loading ? 'Loading...'
          : (
            <ImageList
              list={select.photos}
              renderItem={renders.imageItem}
              layout={layout}
            />
          )
      }
    </div>
  );
}

export default memo(Gallery);
