import { render, screen } from '@testing-library/react';
import Header from '../Components/Header/Header.tsx';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


test('renders Header', () => {
  render(<Header />);
  const linkElement = screen.getByText('Header');
  expect(linkElement).toBeInTheDocument();
});
