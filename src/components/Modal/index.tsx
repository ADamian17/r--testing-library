import React from 'react';

import { useRecoilState } from 'recoil';
import { modalAtom } from './atom';

type ModalProps = {
  modalContent: string;
};

const Modal: React.FC<ModalProps> = ({ modalContent }) => {
  const [showModal, setShowModal] = useRecoilState(modalAtom);

  return (
    <div>
      <button
        data-testid="modal-trigger"
        onClick={() => setShowModal(!showModal)}
      >
        Open Modal
      </button>

      {showModal ? (
        <div data-testid="modal">
          <button
            data-testid="modal-close"
            onClick={() => setShowModal(!showModal)}
          >
            close Modal
          </button>

          {modalContent}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;
