import React from 'react';

const Form: React.FC = (props) => {
  return (
    <div>
      <form>
        <input type="password" placeholder="Password" />
        <input type="submit" value="Confirm identity" />
      </form>

      <p>thank you for signing up</p>
    </div>
  );
};

export default Form;
