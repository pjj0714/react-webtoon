import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Gnb from '../component/Gnb';
import WebtoonList from '../component/WebtoonList';
import axios from 'axios';

const Main = props => {
  const curDay = new URLSearchParams(props.location.search).get('day');
  const [day, setDay] = useState(curDay || 'mon');
  const [webtoonLists, setWebtoobLists] = useState([]);

  useEffect(() => {
    getList();
    if (curDay) setDay(curDay);
  }, [curDay]);

  const _webtoonList = lists => {
    return lists.filter(webtoon => webtoon.day === day);
  };

  const getList = () => {
    axios
      .get('/dummy/webtoon_list.json')
      .then(data => setWebtoobLists(_webtoonList(data.data.webtoonList)))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Header />
      <Gnb day={day} />
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
