import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../App';

// TODO check links open correct pages, when pages are populated

function getHeader() {
  render(<App />);
  const header = screen.getByRole('banner');
  return header;
}

describe('Header tests', () => {
  it('Logo points to the correct page', () => {
    const header = getHeader();
    const link = within(header).getByRole('link', { name: 'logo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('"Search" link points to the correct page', () => {
    const header = getHeader();
    const link = within(header).getByRole('link', { name: /search/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/search/javascript');
  });

  it('"How it works" link points to the correct page', () => {
    const header = getHeader();
    const link = within(header).getByRole('link', { name: /how it works/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/#how-it-works');
  });

  it('"About" link points to the correct page', () => {
    const header = getHeader();
    const link = within(header).getByRole('link', { name: /about/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/#about');
  });
});
