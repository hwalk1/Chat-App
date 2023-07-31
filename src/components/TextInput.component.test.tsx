import React, {
  useState as useStateMock,
  Dispatch,
  SetStateAction,
} from 'react';
import TextInput from './TextInput';
import { render, fireEvent } from '@testing-library/react';

// mock useState hook
// mock useState value
// test placeholder is correct
// test value is correct after change
// test input renders
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Testing our text input', () => {
  // Render a React element into the DOM
  // render(<TextInput type="email" />)

  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState');
  // useStateSpy.mockImplementation((init) => [init, setState]);
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init: any) => [init, setState]);
  });

  it('My text input renders correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInput type="email" value="" onChange={jest.fn()} />
    );

    const textInput = getByPlaceholderText('Type here...');
    expect(textInput).toBeVisible();
  });

  it('My text input value updates on change', () => {
    // const mockStateSetter = jest.fn();
    // React.useState.mockReturnValue(['initial value', mockStateSetter]);
    const mockStateSetter: Dispatch<SetStateAction<string>> = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockReturnValue(['initial value', mockStateSetter as any]);

    const { container } = render(
      <TextInput type="email" value="fff" onChange={jest.fn()} />
    );
    const inputElement = container.querySelector('input');
    inputElement &&
      fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(inputElement).toBeVisible();

    expect(mockStateSetter).toHaveBeenCalledWith('new value');
  });
});
