import { useState, useRef, useEffect, useMemo } from "react";
import Ball from "./Ball";

const getWinNumbers = () => {
    const candidate = Array(45).fill().map((v,i) => i+1);
    const shuffle = [];
    while(candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length-1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p-c);
    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []); //로또 숫자 기억
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [reStart, setReStart] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        for(let i = 0; i<winNumbers.length-1; i++){
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => {
                    return [...prevBalls, winNumbers[i]]})
            }, (i+1)*1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6])
            setReStart(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]);
    const onClickReStart = () => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setReStart(false);
        timeouts.current = [];
    }

    return(
        <div className="App">
            <h1>오늘의 행운 번호</h1>
            <div>당첨 숫자</div>
            <div className="ball_wrapper">{winBalls.map((v) => <Ball key={v} number={v} />)}</div>
            <div>보너스!</div>
            <div className="ball_wrapper">{bonus && <Ball number = {bonus} />}</div>
            {reStart && <button onClick={onClickReStart}>한 번 더!</button>}
        </div>
        
    )    
}

export default Lotto