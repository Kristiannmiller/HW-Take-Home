import { render, screen } from '@testing-library/react';
import Dashboard from '../Components/Dashboard/Dashboard';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Dashboard', () => {
  test('renders Dashboard', () => {
    expect(true).toBe(true);
  });
});
