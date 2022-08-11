import { useState } from "react";
import Try from "./Try";

  const getNumbers = () =>{
    const candidate = [1,2,3,4,5,6,7,8,9];
    const arr = [];
    for(let i =0; i<4; i++){
      const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
      arr.push(chosen);
    }
    return arr;
  }

function NumberBaseball() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const [answer, setAnswer] = useState(getNumbers());

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(value===answer.join('')){
      setResult('홈런!');
      setTries([...tries, {try: value, result: "홈런! "}]);
      alert('홈런!');
      alert('게임을 다시 시작합니다!');
      setResult('');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    }
    else{
      const answerArray = value.split('').map((v)=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length>=9){
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setResult('');
        setAnswer(getNumbers());
        setTries([]);
      }
      else {
        for(let i =0; i< 4; i++){
          if(answerArray[i]===answer[i]){
            strike++;
          } 
          else if(answer.includes(answerArray[i])){
            ball++;
          }
        }
        setTries([...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}])
      }
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>숫자야구 ⚾️</h1>
      <div>숫자 4개를 맞혀 보세요.</div>
      <form onSubmit={onSubmitForm}>
        <input value={value} onChange={onChangeInput}></input>
        <button>입력</button>
      </form>
      <div>시도:{tries.length}</div>
      <div>{result}</div>
      <ul>
        {tries.map((v,i) => {
          return(
            <Try key={`${i + 1}차 시도:`} tryInfo={v} />
          )
        })}
      </ul>
    </div>
  );
}

export default NumberBaseball;
