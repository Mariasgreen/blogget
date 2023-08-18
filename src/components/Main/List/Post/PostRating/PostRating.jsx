import React from 'react';
import style from '../Post.module.css';
import PropTypes from 'prop-types';

const PostRating = ({ups, downs}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='up' />
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='down' />
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number.isRequired,
  downs: PropTypes.number
};

export default PostRating;
