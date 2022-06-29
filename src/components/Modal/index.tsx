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
      <button onClick={() => setShowModal(!showModal)}>open modal</button>

      {showModal ? (
        <div>
          <button onClick={() => setShowModal(!showModal)}>close Modal</button>

          {modalContent}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;
