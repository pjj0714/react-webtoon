import React, { useEffect } from 'react';

const WebtoonInfo = props => {
  const { webtoon } = props;
  useEffect(() => {});
  return (
    <div className="wrap_webtoon">
      <img
        src={webtoon.thumbnail}
        alt={webtoon.title}
        className="img_webtoon"
      />
      <div className="info_webtoon">
        <strong className="tit_webtoon">{webtoon.title}</strong>
        {webtoon.genre.map((g, index) => (
          <span key={index}> {g} </span>
        ))}
        <span className="num_score">평점 : {webtoon.score} </span>
      </div>
    </div>
  );
};

export default WebtoonInfo;
