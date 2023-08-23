/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import style from './PostImg.module.css';
import notphoto from '../img/notphoto.jpg';

const PostImg = ({title}) => {
  return (
    <img className={style.img} src={notphoto} alt={title} />
  );
};
PostImg.propTypes = {
  title: PropTypes.string,
};

export default PostImg;
