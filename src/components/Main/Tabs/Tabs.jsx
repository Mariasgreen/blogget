import style from './Tabs.module.css';

export const Tabs = () => {
  console.log(style);
  return (<ul className={style.list}>
    <li>
      <a href='/'>Glavnaja</a>
    </li>
    <li>
      <a href='/'>Prosmotrinnie</a>
    </li>
    <li>
      <a href='/'>Sohr</a>
    </li>
    <li>
      <a href='/'>Post</a>
    </li>
  </ul>);
};
