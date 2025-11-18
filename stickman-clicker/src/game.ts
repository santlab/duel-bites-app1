import React, { useState, useEffect } from 'react';
import Stickman from './ui/Stickman';
import HUD from './ui/HUD';
import UpgradePanel from './ui/UpgradePanel';
import { clickHandler, autoClicker } from './systems/clicker';
import { changeScenery } from './systems/scenery';

const Game = () => {
    const [gold, setGold] = useState(0);
    const [level, setLevel] = useState(0);
    const [autoClick, setAutoClick] = useState(false);
    const [scenery, setScenery] = useState('default');

    useEffect(() => {
        const sceneryInterval = setInterval(() => {
            if (level % 50 === 0) {
                setScenery(changeScenery(level));
            }
        }, 1000);

        return () => clearInterval(sceneryInterval);
    }, [level]);

    const handleClick = () => {
        const earnedGold = clickHandler();
        setGold(gold + earnedGold);
    };

    const purchaseAutoClicker = () => {
        if (gold >= 2000) {
            setGold(gold - 2000);
            setAutoClick(true);
            autoClicker();
        }
    };

    return (
        <div className={`game-container ${scenery}`}>
            <Stickman onClick={handleClick} />
            <HUD gold={gold} level={level} />
            <UpgradePanel 
                gold={gold} 
                setGold={setGold} 
                level={level} 
                purchaseAutoClicker={purchaseAutoClicker} 
            />
        </div>
    );
};

export default Game;