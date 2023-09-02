/* eslint-disable max-len */
import style from './Auth.module.css';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {URL} from '../../../api/const';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';


export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(response => response.json()
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      }
      )).catch(err => {
      console.error(err);
      setAuth({});
    }
    );
  }, [token]);

  return (
    <div className={style.container} >
      { auth.name ? (
        <button className={style.btn}>
          <img
            className={style.img}
            src = {auth.img}
            title={auth.name}
            alt = {`Avatar ${auth.name}`}
          />
          <Text>{auth.name}</Text>
        </button>

      ) :
  (<Text className={style.authLink} As='a' href={urlAuth}>
    <AuthIcon width={35} height={35} color='orange'/>
  </Text>
     )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
