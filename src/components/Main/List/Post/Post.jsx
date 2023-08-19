import React from 'react';
import style from './Post.module.css';
import PostContent from './PostContent/PostContent';
import PostRating from './PostRating/PostRating';
import PostDate from './PostDate/PostDate';
import PostImg from './PostImg/PostImg';
import Delete from './Delete';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {title, author, ups, downs, date} = postData;
  return (
    <li className={style.post}>
      <PostContent author={author} title={title} />
      <PostImg title={title} />
      <PostRating ups={ups} downs={downs} />
      <PostDate date={date} />
      <Delete />
    </li>
  );
};

Post.propTypes = {
  style: PropTypes.object,
  postData: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  ups: PropTypes.number,
  downs: PropTypes.number,
  date: PropTypes.string,
};
