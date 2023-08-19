import React from 'react';
import style from '../Post.module.css';
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
