/* eslint-disable max-len */
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/login.svg';

export const Auth = () => (
  <button className={style.button} >
    <AuthIcon width={35} height={35} color='orange'/>
  </button>
);
