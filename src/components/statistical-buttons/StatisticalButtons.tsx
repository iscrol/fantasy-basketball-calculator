import React from 'react'
import styles from './StatisticalButtons.module.css'

const StatisticalButtons = () => {

    const categories = ["PTS", "REB", "AST", "STL", "BLK", "3PM", "FG%", "FT%", "TO"];
    
    const handleClick = (category: string) => {
        console.log(`You clicked ${category}`)
    }

    return (
        <div className={styles.container}>
            {categories.map((category: string) => (
                <button
                    key={category}
                    onClick={() => handleClick(category)}
                    className={styles.statBtn}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default StatisticalButtons