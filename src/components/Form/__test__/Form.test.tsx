/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '..';

describe('Form Component', () => {
  beforeEach(() => render(<Form />));
  test('Form should be in the document', () => {});
  test('User should be able to type in the input', () => {});
  test('Form should display success banner', () => {});
  test('Form should display error message', () => {});
});
