import { render, screen } from '@testing-library/react';
import App from '../Components/App/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World!');
  expect(linkElement).toBeInTheDocument();
});