import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    fweight,
    className,
    children,
    href,
    center,
    onClick,
  } = props;

  const classes = classNames(
    className,
    style[color],
    style[fweight],
    { [style.center]: center },
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize }
  );

  return (
    <As className={classes} href={href} onClick={onClick}>
      {children}
    </As>
  );
};

Text.propTypes = {
  onClick: PropTypes.func,
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  fweight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};
