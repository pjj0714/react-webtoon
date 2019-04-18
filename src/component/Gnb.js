import React from 'react';
{
  /* <li>
        <a href="#none" className="tab_day">
          월요일
        </a>
      </li>
      <li>
        <a href="#none" className="tab_day">
          화요일
        </a>
      </li>
      <li>
        <a href="#none" className="tab_day">
          수요일
        </a>
      </li> */
}

const Gnb = () => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  return (
    <ul className="gnb">
      {days.map(day => {
        return (
          <li>
            <a href="#none" className="tab_day">
              {`${day}요일`}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Gnb;
