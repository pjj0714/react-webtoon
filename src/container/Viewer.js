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
        setEpisode(filterData);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="wrap_viewer">
      {episode.id ? (
        <div>
          <div className="top_viewer">
            {episode.title}
            <Link to={`/webtoon/${episode.webtoonId}`} className="btn_close">
              X
            </Link>
          </div>
          <div className="wrap_images">
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
