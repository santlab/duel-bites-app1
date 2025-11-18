import { useState, useEffect } from 'react';

const ClickerSystem = () => {
    const [gold, setGold] = useState(0);
    const [autoClickerPurchased, setAutoClickerPurchased] = useState(false);
    const [clickMultiplier, setClickMultiplier] = useState(1);
    const [clicks, setClicks] = useState(0);
    const [level, setLevel] = useState(0);
    const [backgroundEffect, setBackgroundEffect] = useState(false);

    const handleClick = () => {
        const earnedGold = clickMultiplier;
        setGold(gold + earnedGold);
        setClicks(clicks + 1);

        if (clicks >= 60) {
            setBackgroundEffect(true);
            setTimeout(() => setBackgroundEffect(false), 3000);
        }
    };

    const purchaseAutoClicker = () => {
        if (gold >= 2000) {
            setGold(gold - 2000);
            setAutoClickerPurchased(true);
        }
    };

    useEffect(() => {
        let autoClickInterval;
        if (autoClickerPurchased) {
            autoClickInterval = setInterval(() => {
                setGold(gold => gold + clickMultiplier);
            }, 1000);
        }
        return () => clearInterval(autoClickInterval);
    }, [autoClickerPurchased, clickMultiplier]);

    useEffect(() => {
        if (level % 50 === 0 && level > 0) {
            // Change scenery logic here
        }
        if (level % 100 === 0 && level > 0) {
            // Change scenery logic here
        }
    }, [level]);

    return {
        gold,
        handleClick,
        purchaseAutoClicker,
        backgroundEffect,
        setLevel,
        setClickMultiplier,
    };
};

export default ClickerSystem;