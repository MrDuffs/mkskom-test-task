import { memo, useCallback, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import search from '../../assets/icons/search-form/search.svg';
import arrow from '../../assets/icons/search-form/arrow.svg';
import { searchPhotos } from '../../store/reducers/photos/actions';
import './style.scss';

function SearchForm() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [validationError, setValidationError] = useState('');

  const select = useSelector((state) => ({
    layout: state.photosList.layout,
  }), shallowEqual);

  const callbacks = {
    onSearch: useCallback((albumId) => {
      dispatch(searchPhotos(albumId, select.layout));
    }, [dispatch, select.layout]),
  };

  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    // Проверяем, содержит ли введенное значение только цифры
    if (/^\d*$/.test(input)) {
      setSearchValue(input);
      setValidationError('');
    } else {
      setValidationError('Please, enter only numbers.');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validationError) {
      callbacks.onSearch(searchValue);
      setSearchValue('');
    }
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__input">
        <img src={search} alt="search" />
        <input
          type="text"
          placeholder="Search Albums"
          value={searchValue}
          onChange={handleSearchInputChange}
          onSubmit={onSubmit}
        />
        <div
          className={`search-form__input-error ${validationError ? 'active' : ''}`}
        >
          {validationError}
        </div>
      </div>
      <button
        type="submit"
        className="search-form__submit"
      >
        <img src={arrow} alt="submit" />
      </button>
    </form>
  );
}

export default memo(SearchForm);
