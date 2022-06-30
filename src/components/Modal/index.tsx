import React from 'react';

import { useRecoilState } from 'recoil';
import { modalAtom } from './atom';
import Button from './Button';

type ModalProps = {
  modalContent: string;
};

const Modal: React.FC<ModalProps> = ({ modalContent }) => {
  const [showModal, setShowModal] = useRecoilState(modalAtom);

  return (
    <div>
      <Button
        data-testid="modal-trigger"
        btnText={'open modal'}
        setFunc={setShowModal}
      />

      {showModal ? (
        <div data-testid="modal">
          <button
            data-testid="modal-close-btn"
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
