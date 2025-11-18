import React, { useState } from 'react';

const UpgradePanel = ({ gold, onUpgradePurchase }) => {
    const [upgrades, setUpgrades] = useState([
        { id: 1, name: 'Sword', cost: 100, multiplier: 1, level: 0 },
        { id: 2, name: 'Boots', cost: 200, multiplier: 2, level: 0 },
        { id: 3, name: 'Helmet', cost: 300, multiplier: 3, level: 0 },
        { id: 4, name: 'Chestplate', cost: 400, multiplier: 5, level: 0 },
        { id: 5, name: 'Pants', cost: 500, multiplier: 1, level: 0 },
    ]);

    const handleUpgradePurchase = (upgrade) => {
        if (gold >= upgrade.cost && upgrade.level < 10) {
            onUpgradePurchase(upgrade.id);
            setUpgrades((prevUpgrades) =>
                prevUpgrades.map((u) =>
                    u.id === upgrade.id ? { ...u, level: u.level + 1, cost: u.cost * 1.5 } : u
                )
            );
        }
    };

    return (
        <div className="upgrade-panel">
            <h2>Upgrade Panel</h2>
            <div className="upgrades">
                {upgrades.map((upgrade) => (
                    <div key={upgrade.id} className="upgrade">
                        <span>{upgrade.name} (Level: {upgrade.level})</span>
                        <span>Cost: {Math.floor(upgrade.cost)}</span>
                        <button onClick={() => handleUpgradePurchase(upgrade)} disabled={gold < upgrade.cost || upgrade.level >= 10}>
                            Purchase
                        </button>
                    </div>
                ))}
            </div>
            <div className="auto-click">
                <button onClick={() => onUpgradePurchase('autoClick')} disabled={gold < 2000}>
                    Purchase Auto-Clicker (2000 coins)
                </button>
            </div>
        </div>
    );
};

export default UpgradePanel;