import { render, screen } from '@testing-library/react';
import Movies from './Movies';

test('renders Home link', () => {
  render(<Movies />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});