import style from './layout.module.css';

export const layout = ({children}) => {
  return (
  <div className={style.container}>
  {children}
  </div>
  )
}