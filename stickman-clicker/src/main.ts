import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import './styles/main.css';

const App = () => {
    const [gold, setGold] = useState(0);
    const [autoClicker, setAutoClicker] = useState(false);

    const handleClick = () => {
        setGold(gold + 1);
    };

    const purchaseAutoClicker = () => {
        if (gold >= 2000) {
            setGold(gold - 2000);
            setAutoClicker(true);
        }
    };

    useEffect(() => {
        let autoClickInterval;
        if (autoClicker) {
            autoClickInterval = setInterval(() => {
                setGold((prevGold) => prevGold + 1);
            }, 1000);
        }
        return () => clearInterval(autoClickInterval);
    }, [autoClicker]);

    return (
        <div className="game-container">
            <Game gold={gold} onClick={handleClick} />
            <button onClick={purchaseAutoClicker}>Purchase Auto-Clicker (2000 Gold)</button>
            <div>Total Gold: {gold}</div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));