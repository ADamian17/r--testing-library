import React, { useState } from 'react';

const Form: React.FC = (props) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    setUsername(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (username.length <= 0) setError(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Username"
            type="text"
          />
          {error && <p>field is required</p>}
        </div>
        <input type="submit" value="Confirm identity" />
      </form>

      <p>thank you for signing up</p>
    </div>
  );
};

export default Form;
