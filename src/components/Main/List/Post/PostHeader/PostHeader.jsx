import React from 'react';
import style from '../Post.module.css';
import PropTypes from 'prop-types';

const PostHeader = ({title}) => (
  <h2 className={style}>
    <a className={style.linkPost} href='#post'>{title}</a>
  </h2>
);


PostHeader.propTypes = {
  title: PropTypes.string,
};


export default PostHeader;
