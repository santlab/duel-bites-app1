export interface Player {
    totalGold: number;
    level: number;
    upgrades: Upgrade[];
    armor: Armor[];
    autoClickerActive: boolean;
}

export interface Upgrade {
    id: string;
    name: string;
    cost: number;
    level: number;
    maxLevel: number;
    multiplier: number;
}

export interface Armor {
    type: 'sword' | 'boots' | 'helmet' | 'chestplate' | 'pants';
    material: 'bronze' | 'iron' | 'gold' | 'diamond';
    level: number;
    multiplier: number;
}

export interface Scenery {
    levelThreshold: number;
    background: string;
}