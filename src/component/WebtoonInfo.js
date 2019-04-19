import React, { useEffect } from 'react';

const WebtoonInfo = props => {
  const { webtoon } = props;
  useEffect(() => {});
  return (
    <div>
      <img src={webtoon.thumbnail} alt={webtoon.title} />
      <div>
        <strong>{webtoon.title}</strong>
        {webtoon.genre.map((g, index) => (
          <span key={index}> {g} </span>
        ))}
        <span>평점 : {webtoon.score} </span>
      </div>
    </div>
  );
};

export default WebtoonInfo;
