import style from './Logo.module.css';
import {ReactComponent as Logotip} from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <Logotip/>
  </a>
);
