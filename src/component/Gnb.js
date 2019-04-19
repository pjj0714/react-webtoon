import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = props => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const engDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return (
    <ul className="gnb">
      {days.map((day, i) => {
        return (
          <li>
            <Link
              onClick={props.onClickEve()}
              to={`/?day=${engDays[i]}`}
              className={
                props.day === engDays[i] ? 'tab_day.on' : 'tab_day'
              }>{`${day}요일`}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Gnb;
