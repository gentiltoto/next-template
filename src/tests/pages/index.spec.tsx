import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home', () => {
  it('renders the home page', async () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /^Next\.js Template/i
    });

    expect(heading).toBeDefined();
  });
});
