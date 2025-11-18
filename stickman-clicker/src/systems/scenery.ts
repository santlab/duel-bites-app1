import { useEffect, useState } from 'react';

const sceneries = [
    { level: 0, background: 'url(/path/to/city.png)' },
    { level: 50, background: 'url(/path/to/green_background.png)' },
    { level: 100, background: 'url(/path/to/house.png)' },
    { level: 150, background: 'url(/path/to/forest.png)' },
    { level: 200, background: 'url(/path/to/random_landscape.png)' },
];

const useScenery = (level) => {
    const [background, setBackground] = useState(sceneries[0].background);

    useEffect(() => {
        const scenery = sceneries.slice().reverse().find(s => level >= s.level);
        if (scenery) {
            setBackground(scenery.background);
        }
    }, [level]);

    return background;
};

export default useScenery;