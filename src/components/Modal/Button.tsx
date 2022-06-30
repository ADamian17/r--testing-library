import React from 'react';
import { SetterOrUpdater } from 'recoil';

type BtnProps = {
  btnText: string;
  setFunc: SetterOrUpdater<boolean>;
  [key: string]: any;
};

const Button: React.FC<BtnProps> = ({ setFunc, btnText, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.dataset);
    setFunc((prevState) => !prevState);
  };

  return (
    <button onClick={handleClick} {...rest}>
      {btnText}
    </button>
  );
};

export default Button;
