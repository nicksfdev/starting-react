import { render, screen } from '@testing-library/react';
import {AppFunctionalComponent, AppClassComponent} from './App';

test('renders learn react link', () => {
  render(<AppClassComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
