import { render, screen } from '@testing-library/react';
import BDCard from '../Components/BDCard/BDCard.tsx';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


test('renders BDCard', () => {
  render(<BDCard />);
  const linkElement = screen.getByText('BDCard');
  expect(linkElement).toBeInTheDocument();
});
