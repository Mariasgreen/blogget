import {useState, useEffect} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../utils/random';
import {debponceRaf} from '../utils/debounce';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';


const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: BestIcon},
  {value: 'Лучшие', Icon: TopIcon},
  {value: 'Горячее', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [selectedItem, setSelectedItem] = useState(LIST[0].value);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debponceRaf(handleResize);
    window.addEventListener('resize', debounceResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);


  return (
    <div className = {style.container}>
      {isDropdown && (<div className = {style.wrapperBtn}>
        <button
          className = {style.btn}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {selectedItem}
          <ArrowIcon width={15} height={15}/>
        </button>
      </div>)}

      { (isDropDownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          { LIST.map(({value, id, Icon}) => (
            <li className = {style.item} key = {id}>
              <button className = {style.btn}
                onClick={() => setSelectedItem(value)}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </li>
          ))
          }
        </ul>)}
    </div>
  );
};


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func
};
