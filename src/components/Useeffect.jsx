import React, { useState, useEffect } from 'react';

const Useeffect = () => {
  const [counter, setCounter] = useState(0); // Initialize state

  useEffect(() => {
    console.log("useEffect is running. Counter:", counter);
    document.title=counter;
  }, [counter]); // Dependency array ensures useEffect runs when counter changes

  return (
    <div >
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default Useeffect;
