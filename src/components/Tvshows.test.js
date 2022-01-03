import { render, screen } from '@testing-library/react';
import Tvshows from './Tvshows';

test('renders Home link', () => {
  render(<Tvshows />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});