import { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from '../../../utils/debounce';
import { Text } from '../../../UI/Text';

const LIST = [
  { value: 'Главная', Icon: HomeIcon },
  { value: 'Топ', Icon: TopIcon },
  { value: 'Лучшие', Icon: BestIcon },
  { value: 'Горячие', Icon: HotIcon },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDown, setIsDropdown] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');

  const handleBtnValue = (itemValue) => {
    setSelectedItem(itemValue);
  };

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            {selectedItem ? selectedItem : 'Выберите категорию'}
            <ArrowIcon />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropDown) && (
        <ul
          className={style.list}
          onClick={() => {
            setIsDropdownOpen(false);
          }}
        >
          {LIST.map(({ value, id, Icon }) => (
            <Text As="li" className={style.item} key={id}>
              <Text
                As="button"
                className={style.btn}
                onClick={() => {
                  handleBtnValue(value);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
  isDropDown: PropTypes.bool,
};
