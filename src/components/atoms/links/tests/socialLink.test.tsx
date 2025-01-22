import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { FaGithub } from "react-icons/fa6";
import LinkWithIcon from '../socialLink';

describe('LinkWithIcon component', () => {
  test('renders link with icon correctly', () => {
    const { getByLabelText } = render(
      <LinkWithIcon href="https://github.com" icon={FaGithub} aria="GitHub" />
    );
    const linkElement = getByLabelText('GitHub');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://github.com');
  });
  
  test('renders link with correct icon', () => {
    const { getByLabelText } = render(
      <LinkWithIcon href="https://github.com" icon={FaGithub} aria="GitHub" />
    );
    const iconElement = getByLabelText('GitHub').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });
});