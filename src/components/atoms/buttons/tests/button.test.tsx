import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Button from '../button';

describe('Button component', () => {
  test('renders primary button correctly', () => {
    const { getByText } = render(<Button variant="primary-button" text="Primary Button" />);
    const buttonElement = getByText('Primary Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders secondary button correctly', () => {
    const { getByText } = render(<Button variant="secondary-button" text="Secondary Button" />);
    const buttonElement = getByText('Secondary Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders primary link correctly', () => {
    const { getByText } = render(<Button variant="primary-link" text="Primary Link" />);
    const linkElement = getByText('Primary Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toMatchSnapshot();
  });

  test('renders secondary link correctly', () => {
    const { getByText } = render(<Button variant="secondary-link" text="Secondary Link" />);
    const linkElement = getByText('Secondary Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toMatchSnapshot();

  });

  test('calls onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button variant="primary-button" text="Click Me" onClick={onClickMock} />);
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});