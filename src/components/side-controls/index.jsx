import { memo } from 'react';
import file from '../../assets/icons/side-controls/file.svg';
import folder from '../../assets/icons/side-controls/folder.svg';
import addCircle from '../../assets/icons/side-controls/add_circle.svg';
import SideControlLabels from '../side-control-labels';
import './style.scss';

function SideControls() {
  return (
    <div className="side-controls">
      <div className="side-controls__add-note-btn">
        <button type="button">
          <img src={file} alt="folder" />
          New Note
        </button>
      </div>
      <div className="side-controls__menu">
        <div className="side-controls__all-notes-btn">
          <button type="button">
            <div className="left-side">
              <img src={folder} alt="folder" />
              <div className="left-side__title">
                All Notes
              </div>
            </div>
            <span className="amount">43</span>
          </button>
        </div>
        <ul className="side-controls__list">
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  Design
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  Code Blocks
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  Drafts
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  Peoples Review
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  Social
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  Labels
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
          <li className="side-controls__item">
            <button type="button">
              <div className="left-side">
                <img src={folder} alt="folder" />
                <div className="left-side__title">
                  My Notes
                </div>
              </div>
              <span className="amount">23</span>
            </button>
          </li>
        </ul>
        <div className="side-controls__add-folder">
          <button type="button">
            <div className="left-side">
              <img src={addCircle} alt="add" />
              <div className="left-side__title">
                Add Folder
              </div>
            </div>
          </button>
        </div>
      </div>
      <SideControlLabels />
    </div>
  );
}

export default memo(SideControls);
