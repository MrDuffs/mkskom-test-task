import { memo } from 'react';
import search from '../../assets/icons/search-form/search.svg';
import arrow from '../../assets/icons/search-form/arrow.svg';
import './style.scss';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__input">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search Albums" />
      </div>
      <button type="submit" className="search-form__submit">
        <img src={arrow} alt="submit" />
      </button>
    </form>
  );
}

export default memo(SearchForm);
