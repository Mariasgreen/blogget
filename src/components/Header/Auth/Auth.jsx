/* eslint-disable max-len */
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';

export const Auth = ({auth}) => (
  <button className={style.button} >
    { auth ? (auth) :
  (<Text As = 'a' href = {urlAuth}>
    <AuthIcon width={35} height={35} color='orange'/>
  </Text>
     )}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
