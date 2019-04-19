import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeList = props => {
  return (
    <ul>
      {props.episodeList.map((episode, index) => {
        return (
          <li key={index}>
            <Link to={`/viewer/${episode.id}`}>
              <img src={episode.thumbnailImage.url} alt={episode.title} />
              <div>
                <strong>{episode.title}</strong>
                {`${episode.dateCreated.substr(
                  0,
                  4
                )}.${episode.dateCreated.substr(
                  4,
                  2
                )}.${episode.dateCreated.substr(6, 2)}`}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default EpisodeList;
