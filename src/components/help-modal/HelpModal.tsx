import React from 'react';
import styles from './HelpModal.module.css';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>How to Use the Fantasy Basketball Calculator</h2>
                <p>
                    Traditionally, in fantasy basketball there are 9 statistical
                    categories: points, rebounds, assists, steals, blocks,
                    3-pointers made, free-throw percentage, field-goal percentage,
                    and turnovers. Every week your goal is to do better in more of 
                    these categories than your opponent. Since, you only need to win 5
                    of the categories to win your matchup it is a very popular strategy
                    to "punt" certain categories meaning you ignore these categories and 
                    don't care how you do in them in order to focus on being better at 
                    the remaining categories.
                </p>
                <p>
                    This is where this calculator comes into play. This calculator is meant
                    to help users draft players that best fit their punting strategy. While
                    there are many rankings online that take into account all the categories,
                    rankings can drastically change after certain statistical categories are
                    ignored. This calculator allows users to see newly calculated values of
                    players after they input their specific strategy.
                </p>
                <p>
                    Initially, all categories are taken into the calculation. Users can click
                    on the categories they want to punt to see the new rankings of players. After 
                    punting a category it's button will be grey'd out to clearly signify it's being
                    removed from the calculations and a new ranking of players would appear.
                    Example: say I want to punt 3-pointers made and free-throw percentage,
                    I would click 3PM and FT% so they are grey'd out and then observe the 
                    new rankings that appear from it.
                </p>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
}

export default HelpModal;