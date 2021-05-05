import { render, screen } from '@testing-library/react';
import Navigation from '../Components/Navigation/Navigation';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Navigation', () => {
  test('renders Navigation', () => {
    render(
      <Navigation
      />);
    const snapshot = screen.getByText('SNAPSHOT');
    const trends = screen.getByText('TRENDS');
    expect(snapshot).toBeInTheDocument();
    expect(trends).toBeInTheDocument();
  });
});
