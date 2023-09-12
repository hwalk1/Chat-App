import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Two potential buttons to render
// link
// regular button

// title required
// buttonType required

// test button can be clicked
// test link can be clicked

// test disabled state

describe('When testing our Button', () => {
  // test button renders

  it('My regular button renders correctly', () => {
    const { getByTestId } = render(
      <Button title="Button" buttonType="primary" />
    );

    const button: HTMLElement = getByTestId('test-base_button');
    expect(button).toBeVisible();
  });
  // test link button renders with link
  it('My nav button renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Button title="Nav" buttonType="primary" to="/" />
      </BrowserRouter>
    );

    const navLink: HTMLElement = getByTestId('test-nav_link');
    const navButton: HTMLElement = getByTestId('test-nav_button');

    expect(navButton).toBeVisible();
    expect(navLink).toBeVisible();
  });
  // test button has a title
  // test button has a type

  it('My Button renders with the correct title', () => {
    const { getByTestId } = render(
      <Button title="Button" buttonType="primary" />
    );

    const button: HTMLElement = getByTestId('test-base_button');
    expect(button).toBeVisible();
    expect(button.textContent).toBe('Button');
  });
});
