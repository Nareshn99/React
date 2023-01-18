import React, { useState } from 'react'
import './UpperCase.css';

function UpperCase(props) {
  const [Text, setText] = useState('');

  const [updated, setUpdated] = useState(Text);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setUpdated(Text.toUpperCase());
  };

  return (
    <div className='main'>
      <h1>LowerCase To UpperCase</h1>
      <input
        type="Text"
        onChange={handleChange}
        value={Text}
      />
      <br></br>
      <button onClick={handleClick}>Convert</button>
      <br></br>
      <input
        type="Text"
        value={updated}
      />
      <br></br>

    </div>
  );
}

export default UpperCase
