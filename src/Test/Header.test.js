import { render, screen } from '@testing-library/react';
import Header from '../Components/Header/Header';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';


describe('Header', () => {
  test('renders Header', () => {
    render(
      <Header
        brokerName='Best Broker'
        brokerDes='The best broker out there!'
      />);
    const title = screen.getByText('Best Broker');
    const summary = screen.getByText('The best broker out there!');
    expect(title).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
  });
});
