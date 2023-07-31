import { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getFlexboxPhotos } from '../../store/reducers/flexbox-photos/actions';
import ImageList from '../image-list';
import './style.scss';

function Gallery() {
  const dispatch = useDispatch();
  const [layout, setLayout] = useState('flex');

  useEffect(() => {
    dispatch(getFlexboxPhotos());
  }, [dispatch]);

  const select = useSelector((state) => ({
    photos: state.flexboxPhotos.data,
  }), shallowEqual);

  return (
    <div className="gallery">
      <ImageList list={select.photos} />
    </div>
  );
}

export default memo(Gallery);
