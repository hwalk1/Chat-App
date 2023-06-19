import React from 'react';

interface IButton {
  title: string;
}

const Button = ({ title }: IButton) => {
  return <button type="submit">{title}</button>;
};

export default Button;
