import { render, screen } from '@testing-library/react';
import Actors from './Actors';

test('renders Home link', () => {
  render(<Actors />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});