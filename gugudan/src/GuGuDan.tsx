import React from 'react';
import './App.css';
import { useState } from 'react';

const GuGuDan = () => {

  const [first, setFirst] = useState(Math.ceil(Math.random()*9));
  const [second, setSecond] = useState(Math.ceil(Math.random()*9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  
  const right = () => {
      setResult("🙆‍♀️ 딩동댕~");
      setFirst(Math.ceil(Math.random()*9));
      setSecond(Math.ceil(Math.random()*9));
      setValue("");
  }

  const wrong = () => {
    setResult("🙅‍♂️ 땡!");
    setValue("");
  }

  return(
    <div className='app'>
      <h2>구구단 게임 💬</h2>
      <div>{first} 곱하기 {second}은(는)?</div>
      <form onSubmit={(e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        {Number(value) === (first*second) ? right() : wrong()}
        }}>
        <input type= "number" value={value} onChange = {(e) => {setValue(e.target.value);}} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
)

}
export default GuGuDan;
