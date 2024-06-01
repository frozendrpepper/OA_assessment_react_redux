import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerDetails from './CustomerDetails';

const MOCK_PROPS = {
    image: 'https://mock-url.com',
    subtitle: 'mock subtitle',
    brand: 'mock brand',
    details: ['mock details'],
    tags: ['mock tag1', 'mock tag2'],
};

test('Details page should render correct information from props', () => {
  render(<CustomerDetails customerDetails={MOCK_PROPS} />);
  expect(screen.getByTestId('customer-brand-container')).toHaveTextContent('mock brand');
  expect(screen.getByTestId('customer-subtitle-container')).toHaveTextContent('mock subtitle');
  expect(screen.getByText('mock tag1')).toBeInTheDocument();
  expect(screen.getByText('mock tag2')).toBeInTheDocument();
});