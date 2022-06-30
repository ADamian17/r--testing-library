import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { content } from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByTestId('app')).toContainHTML(content);
});