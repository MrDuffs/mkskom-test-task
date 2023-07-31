import { memo } from 'react';
import flexbox from '../../assets/icons/head-controls/flexbox.svg';
import grid from '../../assets/icons/head-controls/grid.svg';
import del from '../../assets/icons/head-controls/delete.svg';
import search from '../../assets/icons/head-controls/search.svg';
import './style.scss';

function HeadControl() {
  return (
    <div className="head-controls">
      <div className="head-controls__buttons">
        <div className="display-group-button">
          <button type="button">
            <img src={flexbox} alt="flexbox" />
          </button>
          <button type="button">
            <img src={grid} alt="grid" />
          </button>
        </div>
        <div className="head-controls__delete-btn">
          <button type="button">
            <img src={del} alt="delete" />
          </button>
        </div>
      </div>
      <form className="head-controls__form">
        <div className="head-controls__input">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
      </form>
    </div>
  );
}

export default memo(HeadControl);
