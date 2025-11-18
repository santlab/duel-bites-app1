import React from 'react';

const HUD: React.FC<{ gold: number; level: number; upgrades: any }> = ({ gold, level, upgrades }) => {
    return (
        <div className="hud">
            <h1>Stickman Clicker</h1>
            <div className="gold-display">
                <h2>Total Gold: {gold}</h2>
            </div>
            <div className="level-display">
                <h2>Level: {level}</h2>
            </div>
            <div className="upgrades-display">
                <h2>Upgrades:</h2>
                <ul>
                    {upgrades.map((upgrade: any, index: number) => (
                        <li key={index}>
                            {upgrade.name} - Level: {upgrade.level} (Cost: {upgrade.cost})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HUD;