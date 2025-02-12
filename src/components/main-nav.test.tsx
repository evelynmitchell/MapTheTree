import React from 'react';
import { render, screen } from '@testing-library/react';
import MainNav from './MainNav';

test('renders MainNav component', () => {
  render(<MainNav />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});