import React from 'react';

import PropTypes from 'prop-types';
import style from './PostRating.module.css';
import {Text} from '../../../../../UI/Text/Text';


const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='up' />
    <p className={style.ups}><Text weight="medium">
      {ups}
    </Text></p>
    <button className={style.down} aria-label='down' />
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number.isRequired,
};

export default PostRating;
