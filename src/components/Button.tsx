import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <button type="submit" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
