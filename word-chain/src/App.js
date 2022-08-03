import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <WordChain />
    </div>
  );
}

const WordChain = () => {
  const [word, setWord] = useState('호랑이');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const correct = () => {
    setWord(value);
    setValue("");
    setResult();
  }

  const wrong = () => {
    
    setResult("틀렸습니다");
    setValue("");
    if(!value){
      setResult("글자를 입력하세요");
    }
    else if(value.length!==3){
      setResult("세 글자가 아닙니다");
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    word[word.length-1]===value[0] && value.length===3 ? correct() : wrong()
  }

  return (
   <div>
    <div>{word}</div>
    <form onSubmit={onSubmitForm}>
      <input type="text" value={value} onChange={onChangeInput}/>
      <button>쿵쿵따</button>
    </form>
    <div>
      {result}
      </div>
    </div>
  )
}
export default App;
