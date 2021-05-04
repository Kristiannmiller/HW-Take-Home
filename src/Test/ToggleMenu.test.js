import { render, screen } from '@testing-library/react';
import Navigation from '../Components/Navigation/Navigation.tsx';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


test('renders Navigation', () => {
  render(<Navigation />);
  const linkElement = screen.getByText('Navigation');
  expect(linkElement).toBeInTheDocument();
});
