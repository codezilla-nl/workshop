import { render, screen } from '@testing-library/react';
import App from './App';

test('App contains welcome text', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to my online portfolio/i);
  expect(welcomeMessage).toBeInTheDocument();
});
