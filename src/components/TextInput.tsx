import React, { Dispatch, SetStateAction } from 'react';
import { get } from 'lodash';

// an input to handle two types if strings
// one is email
// the other is password

interface ITextInput {
  type: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}
const TextInput = ({ type, onChange, value }: ITextInput) => {
  return (
    <input
      type={type}
      onChange={(e) => {
        const value = get(e, 'target.value', '');
        onChange(value);
      }}
      value={value}
    />
  );
};

export default TextInput;
