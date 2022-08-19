import './App.css';
import { useEffect, useRef, useState } from 'react';
import './Rps.css';

// const rpsCoords = {
//   rock : '✊',
//   scissors: '✌️',
//   paper : '🖐'
// }

const rpsCoords=['✊', '✌️', '🖐'];

const scores = {
  scissors: 1,
  rock : 0,
  paper : -1
}

const RockPaperScissors = () => {

  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rpsCoords[0]);
  const [score, setScore] = useState(0);
  const interval = useRef();

  const computerChoice = (imgCoord) => {
    if(imgCoord === '✊'){
     return 'rock'
    }
    else if(imgCoord === '✌️'){
      return 'scissors'
    }
    else{
      return 'paper'
    }
    // return Object.entries(rpsCoords).find(function(v) {
    //   return v[1] === imgCoord;
    // })[0];
  };

  const onClickBtn = (choice) => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = setInterval(changeHand, 100);
      }, 1000);
    }
  }

  const changeHand = () => {
    setImgCoord(rpsCoords[Math.floor(Math.random()*rpsCoords.length)]); 
      // if(imgCoord === rpsCoords.rock){
      //   setImgCoord(rpsCoords.scissors);
      // }
      // else if(imgCoord === rpsCoords.scissors){
      //   setImgCoord(rpsCoords.paper);
      // }
      // else if(imgCoord === rpsCoords.paper){
      //   setImgCoord(rpsCoords.rock);
      // }
    }

  useEffect(() => {
    interval.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(interval.current);
    }
  }, [imgCoord]);

  return (
    <div className="App">
    <div id="computer">{imgCoord}</div>
    <div>
      <button id="rock" className='btn' onClick={() => {onClickBtn("rock")}}>✊</button>
      <button id="scissors" className='btn' onClick={() => {onClickBtn("scissors")}}>✌️</button>
      <button id="paper" className='btn' onClick={() => {onClickBtn("paper")}}>🖐</button>
    </div>
    <div>{result}</div>
    <div>현재 {score}점</div>
    </div>
  );
}


export default RockPaperScissors;
