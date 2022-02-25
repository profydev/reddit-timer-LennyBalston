import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// TODO check links open correct pages, when pages are populated
describe('Header tests', () => {
  it('Logo points to the correct page', () => {
    render(<App />);
    // screen.debug();
    const link = screen.getByRole('link', { name: 'logo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('"Search" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /search/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/search/javascript');
  });

  it('"How it works" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /how it works/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/#how-it-works');
  });

  it('"About" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/#about');
  });
});
