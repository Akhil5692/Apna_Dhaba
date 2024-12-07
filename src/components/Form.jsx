import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onchangehandler = (e) => {
    e.preventDefault(); // Correct capitalization
    alert(`Your form is submitted:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <form onSubmit={onchangehandler}>
        <div>
          Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <h4>{name}</h4>

        <div>
          Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <h4>{email}</h4>

        <div>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <h4>{password}</h4>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
