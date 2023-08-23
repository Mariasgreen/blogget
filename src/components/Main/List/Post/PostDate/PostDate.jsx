import React from 'react';
import PropTypes from 'prop-types';
import style from './PostDate.module.css';

const formatDate = date => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hours: '2-digit',
    minutes: '2-digit'
  };
  return new Intl.DateTimeFormat('ru', options)
    .format(new Date(date));
};

const PostDate = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostDate;
