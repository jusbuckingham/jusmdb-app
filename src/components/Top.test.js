import { render, screen } from '@testing-library/react';
import Top from './Top';

test('renders Home link', () => {
  render(<Top />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});