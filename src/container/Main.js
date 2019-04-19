import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Gnb from '../component/Gnb';
import WebtoonList from '../component/WebtoonList';
import axios from 'axios';

const Main = props => {
  const initDay =
    props.location.search.length > 0 ? props.location.search.substr(5) : 'mon';
  const [day, setDay] = useState(initDay);
  const [webtoonLists, setWebtoobLists] = useState([]);

  useEffect(() => {
    getList();
  }, [day]);

  const _webtoonList = lists => {
    return lists.filter(webtoon => webtoon.day === day);
  };

  const getList = () => {
    axios
      .get('/dummy/webtoon_list.json')
      .then(data => setWebtoobLists(_webtoonList(data.data.webtoonList)))
      .catch(err => console.log(err));
  };

  const onClickEve = day => {
    setDay(day);
  };

  return (
    <div>
      <Header />
      <Gnb day={day} onClickEve={onClickEve} />
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
