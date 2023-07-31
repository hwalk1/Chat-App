import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';
import clsx from 'clsx';

interface IButton {
  title: string;
  buttonType: string;
  customClass?: string;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, buttonType, customClass, to, onClick }: IButton) => {
  const classNames = (type: string) => {
    return clsx('buttonDefault', customClass, {
      buttonPrimary: type === 'primary',
      buttonSecondary: type === 'secondary',
      buttonOutlined: type === 'outlined',
    });
  };
  // button, input[type="submit"], input[type="reset"] {
  //   background: none;
  //   color: inherit;
  //   border: none;
  //   padding: 0;
  //   font: inherit;
  //   cursor: pointer;
  //   outline: inherit;
  // }

  // need to handle primary, secondary and disabled states
  // maybe an outlined button as well
  // minimun height
  // border radius
  // check click styling/highlight
  // text style
  // box shadow
  if (to) {
    return (
      <Link to={to}>
        <button type="submit" className={classNames(buttonType)}>
          {title}
        </button>
      </Link>
    );
  }
  return (
    <button type="submit" onClick={onClick} className={classNames(buttonType)}>
      {title}
    </button>
  );
};

export default Button;
