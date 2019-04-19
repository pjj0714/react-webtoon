import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Viewer = props => {
  const episodeId = parseInt(props.match.params.viewerId, 10);
  const [episode, setEpisode] = useState({});

  useEffect(() => {
    _getEpisode();
  }, []);

  const _getEpisode = () => {
    const apiUrl = '/dummy/episode_list.json';
    axios
      .get(apiUrl)
      .then(data => {
        const filterData = data.data.webtoonEpisodes.find(
          w => w.id === episodeId
        );
        console.log('asasd: ', data.data.webtoonEpisodes);
        setEpisode(filterData);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      {episode.id ? (
        <div>
          <div>
            {episode.title}
            <Link to={`/webtoon/${episode.webtoonId}`}>X</Link>
          </div>
          <div>
            {episode.images.map((img, index) => (
              <img key={index} src={img} />
            ))}
          </div>
        </div>
      ) : (
        <span>Loding...</span>
      )}
    </div>
  );
};

export default Viewer;
