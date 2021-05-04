import { render, screen } from '@testing-library/react';
import App from '../Components/App/App.tsx';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


test('renders Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World!');
  expect(linkElement).toBeInTheDocument();
});
