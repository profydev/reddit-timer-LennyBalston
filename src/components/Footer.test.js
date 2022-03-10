import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../App';

// TODO check links open correct pages, when pages are populated

function getFooter() {
  render(<App />);
  const footer = screen.getByRole('contentinfo');
  return footer;
}

describe('Footer tests', () => {
  it('Logo points to the correct page', () => {
    const footer = getFooter();
    const link = within(footer).getByRole('link', { name: 'logo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('"Terms" link points to the correct page', () => {
    const footer = getFooter();
    const link = within(footer).getByRole('link', { name: /terms/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/terms');
  });

  it('"profy.dev" link points to the correct page', () => {
    const footer = getFooter();
    const link = within(footer).getByRole('link', { name: /profy.dev/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});
