import { render, screen } from '@testing-library/react';
import Dashboard from '../Components/Dashboard/Dashboard.tsx';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


test('renders Dashboard', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText('Dashboard');
  expect(linkElement).toBeInTheDocument();
});
