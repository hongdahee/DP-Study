import './App.css';
import { useEffect, useRef, useState } from 'react';
import rpsImg from './rps.jpeg';


const rpsCoords = {
  rock : '0',
  scissors: '-142px',
  paper : '-284px'
}

const scores = {
  scissors: 1,
  rock : 0,
  paper : -1
}


const RockPaperScissors = () => {

  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rpsCoords.rock);
  const [score, setScore] = useState(0);
  const interval = useRef();

  const computerChoice = (imgCoord) => {
    return Object.entries(rpsCoords).find(function(v) {
      return v[1] === imgCoord;
    })[0];
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
      if(imgCoord === rpsCoords.rock){
        setImgCoord(rpsCoords.scissors);
      }
      else if(imgCoord === rpsCoords.scissors){
        setImgCoord(rpsCoords.paper);
      }
      else if(imgCoord === rpsCoords.paper){
        setImgCoord(rpsCoords.rock);
      }
    }

  useEffect(() => {
    interval.current = setInterval(changeHand, 1000);
    return () => {
      clearInterval(interval.current);
    }
  }, [imgCoord]);

  return (
    <div className="App">
    <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg), ${imgCoord}, 0`}} />
    <div>
      <button id="rock" className='btn' onClick={() => {onClickBtn("rock")}}>바위</button>
      <button id="scissors" className='btn' onClick={() => {onClickBtn("scissors")}}>가위</button>
      <button id="paper" className='btn' onClick={() => {onClickBtn("paper")}}>보</button>
    </div>
    <div>{result}</div>
    <div>현재 {score}점</div>
    </div>
  );
}


export default RockPaperScissors;
