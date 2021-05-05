import { render, screen } from '@testing-library/react';
import ToggleMenu from '../Components/ToggleMenu/ToggleMenu';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe('ToggleMenu', () => {
  test('renders ToggleMenu', () => {
    const adjustOptions = jest.fn();
    render(
      <ToggleMenu
        adjustOptions={adjustOptions}
        selected={{
          premium: true,
          markets: false,
          industries: true,
          products: false
        }}
      />);
    const premium = screen.getByText('Premium Range');
    const markets = screen.getByText('Markets');
    const industries = screen.getByText('Industries');
    const products = screen.getByText('Products');
    expect(premium).toBeInTheDocument();
    expect(markets).toBeInTheDocument();
    expect(industries).toBeInTheDocument();
    expect(products).toBeInTheDocument();
  });
});
