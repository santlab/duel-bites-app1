import { Upgrade, Armor } from '../types';

const MAX_LEVEL = 10;

const upgrades: Upgrade[] = [
    { id: 'autoClick', name: 'Auto Clicker', cost: 2000, level: 0, maxLevel: MAX_LEVEL, multiplier: 1 },
    // Add more upgrades as needed
];

const armors: Armor[] = [
    { id: 'sword', name: 'Sword', cost: { bronze: 100, iron: 200 }, level: 0, maxLevel: MAX_LEVEL, multiplier: 1 },
    { id: 'boots', name: 'Boots', cost: { bronze: 50, iron: 100 }, level: 0, maxLevel: MAX_LEVEL, multiplier: 2 },
    { id: 'helmet', name: 'Helmet', cost: { iron: 150, gold: 300 }, level: 0, maxLevel: MAX_LEVEL, multiplier: 3 },
    { id: 'chestplate', name: 'Chestplate', cost: { gold: 500, diamond: 1000 }, level: 0, maxLevel: MAX_LEVEL, multiplier: 5 },
    { id: 'pants', name: 'Pants', cost: { bronze: 75, gold: 250 }, level: 0, maxLevel: MAX_LEVEL, multiplier: 2 },
];

export function purchaseUpgrade(upgradeId: string, currentGold: number): { success: boolean, newGold: number } {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (upgrade && currentGold >= upgrade.cost) {
        upgrade.level++;
        return { success: true, newGold: currentGold - upgrade.cost };
    }
    return { success: false, newGold: currentGold };
}

export function purchaseArmor(armorId: string, currentGold: number): { success: boolean, newGold: number } {
    const armor = armors.find(a => a.id === armorId);
    if (armor && currentGold >= armor.cost.bronze) { // Simplified for example
        armor.level++;
        return { success: true, newGold: currentGold - armor.cost.bronze }; // Simplified for example
    }
    return { success: false, newGold: currentGold };
}

export function getUpgradeMultiplier(upgradeId: string): number {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    return upgrade ? upgrade.multiplier : 1;
}

export function getArmorMultiplier(armorId: string): number {
    const armor = armors.find(a => a.id === armorId);
    return armor ? armor.multiplier : 1;
}