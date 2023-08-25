import React from 'react';

import PropTypes from 'prop-types';
import style from './PostRating.module.css';
import {Text} from '../../../../../UI/Text/Text';
import {ReactComponent as Down} from './img/down.svg';
import {ReactComponent as Up} from './img/up.svg';


const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up}> <Down width={15} height={15}/></button>
    <Text As='p' size={12} tsize={16} weight="bold"
      className={style.ups}>{ups}</Text>
    <button className={style.down}> <Up width={15} height={15}/></button>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number,
};

export default PostRating;
