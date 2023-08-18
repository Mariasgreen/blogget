import React from 'react';
import style from './Post.module.css';
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostRating from './PostRating/PostRating';
import PostDate from './PostDate/PostDate';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {title, author, content, ups, downs, date} = postData;
  return (
    <li className={style.post}>
      <PostHeader title={title} style={style} />
      <img className={style.img} src={notphoto} alt={title} />
      <PostContent author={author} content={content} style={style} />
      <PostRating ups={ups} downs={downs} style={style} />
      <PostDate date={date} style={style} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  ups: PropTypes.number,
  downs: PropTypes.number,
  date: PropTypes.string,
};
