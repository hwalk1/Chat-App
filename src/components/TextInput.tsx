import React, { Dispatch, SetStateAction } from 'react';
import { get } from 'lodash';
import clsx from 'clsx';

// an input to handle two types if strings
// one is email
// the other is password

interface ITextInput {
  type: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  customClass?: string;
}

const TextInput = ({ type, onChange, value, customClass }: ITextInput) => {
  const classNames = () => {
    return clsx(customClass);
  };

  return (
    <input
      type={type}
      onChange={(e) => {
        const value = get(e, 'target.value', '');
        onChange(value);
      }}
      value={value}
      className={classNames()}
    />
  );
};

export default TextInput;
