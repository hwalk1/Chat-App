import React, { Dispatch, SetStateAction } from 'react';
import { get } from 'lodash';
import clsx from 'clsx';
import './textInput.scss';

// an input to handle two types if strings
// one is email
// the other is password

interface ITextInput {
  type: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  customClass?: string;
  placeHolder?: string;
}

// disabled state
// isFocus state
// isActive = has content, but not focused

const TextInput = ({
  type,
  onChange,
  value,
  customClass,
  placeHolder = 'Type here...',
}: ITextInput) => {
  const classNames = () => {
    return clsx('defaultInput', customClass);
  };
  console.log('TEST value', value);

  return (
    <input
      type={type}
      onChange={(e) => {
        const value = get(e, 'target.value', '');
        onChange(value);
      }}
      value={value}
      className={classNames()}
      placeholder={placeHolder}
    />
  );
};

export default TextInput;
