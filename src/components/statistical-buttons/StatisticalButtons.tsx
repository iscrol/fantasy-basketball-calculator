import React from 'react';
import styles from './StatisticalButtons.module.css';

interface Props {
    activeStats: string[];
    onToggleStat: (stat: string) => void;
}

const StatisticalButtons: React.FC<Props> = ({ activeStats, onToggleStat }) => {
    const categories = ["PTS", "REB", "AST", "STL", "BLK", "3PM", "FG%", "FT%", "TO"];

    return (
        <div className={styles.container}>
            {categories.map((category: string) => (
                <button
                    key={category}
                    onClick={() => onToggleStat(category)}
                    className={styles.statBtn}
                    style={{ backgroundColor: activeStats.includes(category) ? 'teal' : 'gray' }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default StatisticalButtons;
