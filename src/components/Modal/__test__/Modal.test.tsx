import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

import Modal from '..';

describe('Modal Component', () => {
  beforeEach(() => {
    render(<Modal modalContent={''} />, { wrapper: RecoilRoot });
  });

  test('Modal should not be in the document', () => {
    screen.debug();
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  test('Modal should render', () => {
    userEvent.click(screen.queryByTestId('modal-trigger') as HTMLElement);
    expect(screen.queryByTestId('modal') as HTMLElement).toBeInTheDocument();

    userEvent.click(screen.queryByTestId('modal-close') as HTMLElement);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
