import React, { useState } from 'react';
import styles from './HelpButton.module.css';
import HelpModal from '../help-modal/HelpModal';
import logo from '../../../img/Logo.png'


const HelpButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (
      <div className={styles.header}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <button className={styles.helpBtn} onClick={handleButtonClick}>
              Help
          </button>
          <HelpModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
  );
}

export default HelpButton;