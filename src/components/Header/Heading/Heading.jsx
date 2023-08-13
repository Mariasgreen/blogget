import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({text}) => (
  <p className={style.heading}>{text}</p>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
