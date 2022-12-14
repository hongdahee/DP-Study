import React from 'react';
import './App.css';
import { useState } from 'react';

const GuGuDan = () => {

  const [first, setFirst] = useState(Math.ceil(Math.random()*9));
  const [second, setSecond] = useState(Math.ceil(Math.random()*9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  
  const right = () => {
      setResult("πββοΈ λ©λλ~");
      setFirst(Math.ceil(Math.random()*9));
      setSecond(Math.ceil(Math.random()*9));
      setValue("");
  }

  const wrong = () => {
    setResult("πββοΈ λ‘!");
    setValue("");
  }

  return(
    <div className='app'>
      <h2>κ΅¬κ΅¬λ¨ κ²μ π¬</h2>
      <div>{first} κ³±νκΈ° {second}μ(λ)?</div>
      <form onSubmit={(e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        {Number(value) === (first*second) ? right() : wrong()}
        }}>
        <input type= "number" value={value} onChange = {(e) => {setValue(e.target.value);}} />
        <button>μλ ₯</button>
      </form>
      <div>{result}</div>
    </div>
)

}
export default GuGuDan;
