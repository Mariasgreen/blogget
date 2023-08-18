import React from 'react';
import style from '../Post.module.css';
import PropTypes from 'prop-types';

const PostContent = ({author}) => (
  <div className={style.content}>
    <a className={style.linkAuthor} href='#author'>{author}</a>
  </div>
);

PostContent.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
};

export default PostContent;
