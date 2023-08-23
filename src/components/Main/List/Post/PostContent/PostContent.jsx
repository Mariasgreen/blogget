/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';

const PostContent = ({author, title}) => (
  <div className={style.content}>
    <h2 className={style.title}>
      <a href="#" className={style.linkPost}>
        {title}
      </a>
    </h2>
    <a href="#" className={style.linkAuthor}>
      {author}
    </a>
  </div>
);

PostContent.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
};

export default PostContent;
