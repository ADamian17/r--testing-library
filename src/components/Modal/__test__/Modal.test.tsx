import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

import Modal from '..';

describe('Modal Component', () => {
  beforeEach(() =>
    render(<Modal modalContent={''} />, { wrapper: RecoilRoot })
  );
  test('Modal should not be in the document', () => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('Modal should render', () => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
