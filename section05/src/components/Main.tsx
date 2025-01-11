import React, { useState } from 'react';
import './Main.css';

export default function Main() {
  const handleOnChange = (e) => {
    setOption(e.target.value);
    console.log("변경된 값", e.target.value);
    console.log(e);
  }
  
  const [option, setOption] = useState('');
  return (
    <div>
      <select value={option} onChange={handleOnChange}>
        <option value={'1dd'}>1번</option>
        <option value={'2dd'}>2번</option>
        <option value={'3dd'}>3번</option>
      </select>
      <div>
        {option}
      </div>
    </div>
  );
}
