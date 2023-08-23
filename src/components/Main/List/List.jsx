import React from 'react';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const postsData = [{
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    downs: 10,
    date: '2022-02-21T09:45:00.000Z',
    id: '2',
  },
  {
    thumbnail: '',
    title: 'Title2',
    author: 'Nickname2',
    ups: 24,
    downs: 10,
    date: '2022-02-22T09:45:00.000Z',
    id: '5',
  },
  {
    thumbnail: '',
    title: 'Title3',
    author: 'Nickname3',
    ups: 24,
    downs: 10,
    date: '2022-02-23T09:45:00.000Z',
    id: '3',
  },
  {
    thumbnail: '',
    title: 'Title4',
    author: 'Nickname4',
    ups: 24,
    downs: 10,
    date: '2022-02-24T09:45:00.000Z',
    id: '4',
  }
  ]
  ;

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key = {postData.id} postData={postData}/>
      ))}
    </ul>
  );
};
