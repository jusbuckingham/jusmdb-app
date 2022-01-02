import { render, screen } from '@testing-library/react';
import Actors from './Actors';

test('renders learn react link', () => {
  render(<Actors />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});