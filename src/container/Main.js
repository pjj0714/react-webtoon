import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Gnb from '../component/Gnb';
import WebtoonList from '../component/WebtoonList';
import axios from 'axios';

const Main = props => {
  const [day, setDay] = useState('mon');
  const [webtoonLists, setWebtoobLists] = useState([]);

  const getList = () => {
    axios
      .get('/dummy/webtoon_list.json')
      .then(data => setWebtoobLists(data.data.webtoonList))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    console.log(1);
    getList();
  }, []);

  const _webtoonList = () => {
    return webtoonLists.filter(webtoon => webtoon.day === day);
  };

  return (
    <div>
      <Header />
      <Gnb />
      {webtoonLists.length > 0 ? (
        <WebtoonList list={webtoonLists} />
      ) : (
        <span>Loding....</span>
      )}
      <Footer />
    </div>
  );
};

export default Main;
