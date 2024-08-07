import style from './Comments.module.css';
import { Text } from '../../../UI/Text';
import PropTypes from 'prop-types';
import Time from '../../Main/List/Post/Time';

export const Comments = ({ comments }) => {
  return (
    <ul className={style.list}>
      {comments.map((item) => (
        <li key={item.id} className={style.item}>
          <Text As="h3" className={style.author} size={18} tsize={22}>
            {item.value}
          </Text>
          <Text As="p" className={style.comment} size={14} tsize={18}>
            {item.body}
          </Text>
          <Time date={item.created_utc} />
        </li>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
