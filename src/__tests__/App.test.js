import { render, screen } from '@testing-library/react';

import App from '../App';

test('full app rendering', async () => {

  render(<App />);

  // verify page content
  expect(screen.getByText(/the book nook/i)).toBeInTheDocument();

});
