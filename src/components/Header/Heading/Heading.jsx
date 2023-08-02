import style from './Heading.module.css';

export const Heading = ({ text }) => {
  return (
   <p className={style.heading}>{text}</p>
  )
}