import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Top link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Top/i);
  expect(linkElement).toBeInTheDocument();
});