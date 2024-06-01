import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Logo image should render for the header', () => {
  render(<Header />);
  expect(screen.getByTestId('logo-img')).toBeInTheDocument();
});