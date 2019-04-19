import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Gnb from '../component/Gnb';
import WebtoonInfo from '../component/WebtoonInfo';
import EpisodeList from '../component/EpisodeList';
import axios from 'axios';

const WebToonHome = props => {
  const [webtoonId, setWebtoonId] = useState(
    parseInt(props.match.params.webtoonId, 10)
  );
  const [webtoon, setWebtoon] = useState({});
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    console.log(webtoon);
    _getWebtoon();
    _getEpisodeList();
  }, []);

  const _getWebtoon = () => {
    const apiUrl = '/dummy/webtoon_detail.json';
    axios
      .get(apiUrl)
      .then(data => {
        const filterData = data.data.webtoons.find(w => w.id === webtoonId);
        setWebtoon(filterData);
      })
      .catch(err => console.log(err));
  };
  const _getEpisodeList = () => {
    const apiUrl = '/dummy/episode_list.json';
    axios
      .get(apiUrl)
      .then(data => {
        const filterData = data.data.webtoonEpisodes.filter(
          w => w.webtoonId === webtoonId
        );
        setEpisodeList(filterData);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <Header />
      <Gnb />
      {webtoon.id ? (
        <WebtoonInfo webtoon={webtoon} />
      ) : (
        <span> Loding... </span>
      )}
      {episodeList ? (
        <EpisodeList episodeList={episodeList} />
      ) : (
        <span> Loding... </span>
      )}
      <Footer />
    </div>
  );
};
export default WebToonHome;
