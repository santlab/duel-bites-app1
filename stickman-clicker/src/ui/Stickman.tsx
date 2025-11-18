import React, { useState, useEffect } from 'react';

const Stickman = ({ hasSword }) => {
    const [clicks, setClicks] = useState(0);
    const [isAttacking, setIsAttacking] = useState(false);
    const [backgroundEffect, setBackgroundEffect] = useState(false);

    const handleClick = () => {
        setClicks(clicks + 1);
        if (hasSword) {
            setIsAttacking(true);
            setTimeout(() => setIsAttacking(false), 500); // Attack animation duration
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (clicks >= 60) {
                setBackgroundEffect(true);
                setTimeout(() => setBackgroundEffect(false), 2000); // Effect duration
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [clicks]);

    return (
        <div className={`stickman-container ${backgroundEffect ? 'background-effect' : ''}`} onClick={handleClick}>
            <img src="/path/to/stickman.png" alt="Stickman" className={`stickman ${isAttacking ? 'attacking' : ''}`} />
        </div>
    );
};

export default Stickman;