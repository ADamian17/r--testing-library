import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { RecoilRoot } from 'recoil';

import Modal from '..';

interface SetupProps<T = {}> {
  (Component: React.FC<any>, props?: T): void;
}

const setup: SetupProps = (Component, props = {}) => {
  render(<Component {...props} />, { wrapper: RecoilRoot });
};

describe('Modal Component', () => {
  beforeEach(() => {
    setup(Modal);
  });

  test('Modal should not be in the document', () => {
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  test('Modal should be in the document', () => {
    userEvent.click(screen.getByTestId('modal-trigger'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('Modal should not be in the document whem close is click', () => {
    userEvent.click(screen.getByTestId('modal-trigger'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('modal-close-btn'));
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
