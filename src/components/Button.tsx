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
  isDisabled?: boolean;
}

const Button = ({
  title,
  buttonType,
  customClass,
  to,
  onClick,
  isDisabled,
}: IButton) => {
  const classNames = (type: string) => {
    return clsx('buttonDefault', customClass, {
      buttonPrimary: type === 'primary',
      buttonSecondary: type === 'secondary',
      buttonOutlined: type === 'outlined',
    });
  };

  // need to handle primary, secondary and disabled states
  // maybe an outlined button as well
  // minimun height
  // border radius
  // check click styling/highlight
  // text style
  // box shadow
  if (to) {
    return (
      <Link data-testid="test-nav_link" style={{ width: '100%' }} to={to}>
        <button
          data-testid="test-nav_button"
          style={{ width: '100%' }}
          className={classNames(buttonType)}
          disabled={isDisabled}
        >
          {title}
        </button>
      </Link>
    );
  }
  return (
    <button
      data-testid="test-base_button"
      type="submit"
      onClick={onClick}
      className={classNames(buttonType)}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
