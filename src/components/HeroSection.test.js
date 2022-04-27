import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../App';

function getHero() {
  render(<App />);
  const section = screen.getByTestId('hero-section');
  return section;
}

describe('Hero tests', () => {

  it('"Search" button points to the correct page', () => {
    const hero = getHero();
    const button = within(hero).getByRole('button', { name: /time/i });
    expect(button).toBeInTheDocument();
  });

});
