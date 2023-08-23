import React from 'react';
import PropTypes from 'prop-types';
import style from './Delete.module.css';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const Delete = ({onClick}) => (
  <button className={style.delete} onClick={onClick}>
    <DeleteIcon width={15} height={15}/>
  </button>
);

Delete.propTypes = {
  onClick: PropTypes.func,
};
