import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

interface IButton {
  title: string;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, to, onClick }: IButton) => {
  if (to) {
    return (
      <Link to={to}>
        <button type="submit">{title}</button>
      </Link>
    );
  }
  // first test of importing color variables.
  return (
    <button type="submit" onClick={onClick} className='primaryButtonBackground'>
      {title}
    </button>
  );
};

export default Button;
