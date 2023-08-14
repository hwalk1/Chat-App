import React from 'react';
import TextInput from './TextInput';
import { render } from '@testing-library/react';

// mock useState hook
// mock useState value
// test placeholder is correct
// test value is correct after change
// test input renders
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('When testing our text input', () => {
  it('My text input renders correctly', () => {
    const { getByTestId } = render(
      <TextInput type="email" value="" onChange={jest.fn()} />
    );

    const textInput = getByTestId('test-base_input');
    expect(textInput).toBeVisible();
  });

  it('My text input correctly renders with an initial value, which is visible', () => {
    const { getByTestId } = render(
      <TextInput type="email" value="test" onChange={jest.fn()} />
    );

    const textInput: any = getByTestId('test-base_input');
    expect(textInput).toBeVisible();
    expect(textInput.value).toBe('test');
  });
});

test.each`
  inputValue
  ${'test'}
  ${'hello'}
  ${'goodbye'}
  ${''}
`(
  'Input should render and handle the value prop inputValue=$inputValue correctly',
  ({ inputValue }) => {
    const { getByTestId } = render(
      <TextInput type="email" value={inputValue} onChange={jest.fn()} />
    );
    const textInput: any = getByTestId('test-base_input');
    expect(textInput).toBeVisible();
    expect(textInput.value).toBe(inputValue);
  }
);

// Testing with setState

// it('My text input value updates on change', () => {
//   // const mockStateSetter = jest.fn();
//   // React.useState.mockReturnValue(['initial value', mockStateSetter]);

//   const setStateMock = jest.fn();
//   const useStateMock: any = (useState: any) => [useState, setStateMock];
//   jest.spyOn(React, 'useState').mockImplementation(useStateMock);

//   // const mockStateSetter: Dispatch<SetStateAction<string>> = jest.fn();
//   // jest
//   //   .spyOn(React, 'useState')
//   //   .mockReturnValue(['initial value', mockStateSetter as any]);

//   const { getByPlaceholderText } = render(
//     <TextInput type="email" value="" onChange={jest.fn()} />
//   );
//   const textInput = getByPlaceholderText('Type here...');
//   expect(textInput).toBeVisible();

//   // inputElement &&
//   fireEvent.change(textInput, { target: { value: 'new value' } });
//   // expect(textInput.value).toBe('new value');
//   // expect(inputElement).toBeVisible();

//   expect(setStateMock).toHaveBeenCalledWith('new value');
// });
