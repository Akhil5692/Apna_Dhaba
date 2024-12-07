import React, { useState } from 'react';

const Formhandling = () => {
  const [Formdata, setFormdata] = useState({
    Name: '',
    Email: '',
    Age: '',
    Salary: '',
    Password: ''
  });

  const onchangehandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value }); // Update state based on input name
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Your form has been submitted'+"name"+"Email"+"Age"+"Salary"+"Password")
    // Name: ${Formdata.Name}, 
    // Email: ${Formdata.Email}, 
    // Age: ${Formdata.Age}, 
    // Salary: ${Formdata.Salary}, 
    // Password: ${Formdata.Password}`);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          Name: <input value={Formdata.Name} name="Name" type="text" onChange={onchangehandler} />
        </div>
        <div>
          Email: <input value={Formdata.Email} name="Email" type="email" onChange={onchangehandler} />
        </div>
        <div>
          Age: <input value={Formdata.Age} name="Age" type="number" onChange={onchangehandler} />
        </div>
        <div>
          Salary: <input value={Formdata.Salary} name="Salary" type="number" onChange={onchangehandler} />
        </div>
        <div>
          Password: <input value={Formdata.Password} name="Password" type="password" onChange={onchangehandler} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Formhandling;
