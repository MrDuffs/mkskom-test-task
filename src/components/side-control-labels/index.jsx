import { memo } from 'react';
import addCircle from '../../assets/icons/side-controls/add_circle.svg';
import labelBlue from '../../assets/icons/side-controls/side-control-labels/label_blue.svg';
import labelOrange from '../../assets/icons/side-controls/side-control-labels/label_orange.svg';
import labelGreen from '../../assets/icons/side-controls/side-control-labels/label_green.svg';
import labelPurple from '../../assets/icons/side-controls/side-control-labels/label_purple.svg';
import labelTeal from '../../assets/icons/side-controls/side-control-labels/label_teal.svg';
import './style.scss';

function SideControlLabels() {
  return (
    <div className="side-controls-labels">
      <div className="side-controls-labels__title">
        Labels
      </div>
      <ul className="side-controls-labels__list">
        <li className="side-controls-labels__item">
          <button type="button">
            <div className="left-side">
              <img src={labelBlue} alt="blue" />
              <div className="left-side__title">
                Notes
              </div>
            </div>
          </button>
        </li>
        <li className="side-controls-labels__item">
          <button type="button">
            <div className="left-side">
              <img src={labelOrange} alt="orange" />
              <div className="left-side__title">
                Change Notes
              </div>
            </div>
          </button>
        </li>
        <li className="side-controls-labels__item">
          <button type="button">
            <div className="left-side">
              <img src={labelGreen} alt="green" />
              <div className="left-side__title">
                From Family
              </div>
            </div>
          </button>
        </li>
        <li className="side-controls-labels__item">
          <button type="button">
            <div className="left-side">
              <img src={labelPurple} alt="purple" />
              <div className="left-side__title">
                Imagium
              </div>
            </div>
          </button>
        </li>
        <li className="side-controls-labels__item">
          <button type="button">
            <div className="left-side">
              <img src={labelTeal} alt="teal_blue" />
              <div className="left-side__title">
                Work
              </div>
            </div>
          </button>
        </li>
        <li className="side-controls-labels__item">
          <button type="button">
            <div className="left-side">
              <img src={addCircle} alt="add" />
              <div className="left-side__title">
                New Label
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default memo(SideControlLabels);
