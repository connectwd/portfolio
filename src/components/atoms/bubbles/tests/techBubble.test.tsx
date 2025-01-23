import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TechBubble from '../techBubble';

describe('TechBubble component', () => {
  test('renders tech bubble correctly', () => {
    const tech = 'React';
    const index = 0;
    const { getByText } = render(<TechBubble tech={tech} index={index} />);
    const techBubbleElement = getByText(tech);
    expect(techBubbleElement).toBeInTheDocument();
    expect(techBubbleElement).toHaveClass('techLi');
    expect(techBubbleElement).toHaveTextContent(tech);
  });

  test('renders tech bubble with correct ID', () => {
    const tech = 'React';
    const index = 0;
    const { getByTestId } = render(<TechBubble tech={tech} index={index} />);
    const techBubbleElement = getByTestId(`${tech}-${index}`);
    expect(techBubbleElement).toBeInTheDocument();
  });
});