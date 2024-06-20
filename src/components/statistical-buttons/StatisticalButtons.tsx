import React, { useState } from 'react'
import styles from './StatisticalButtons.module.css'

const StatisticalButtons = () => {

    const categories = ["PTS", "REB", "AST", "STL", "BLK", "3PM", "FG%", "FT%", "TO"];
    
    const initialStates = categories.reduce((acc, category) => {
        acc[category] = true; // All categories start as "on"
        return acc;
    }, {} as { [key: string]: boolean });

    const [buttonStates, setButtonStates] = useState(initialStates);

    const handleClick = (category: string): void => {
        setButtonStates(prevStates => ({
            ...prevStates, 
            [category]: !prevStates[category] 
        }));
    };

    return (
        <div className={styles.container}>
            {categories.map((category: string) => (
                <button
                    key={category}
                    onClick={() => handleClick(category)}
                    className={styles.statBtn}
                    style={{ backgroundColor: buttonStates[category] ? 'teal' : 'gray' }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default StatisticalButtons